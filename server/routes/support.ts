/**
 * routes/support.ts
 * -------------------------------------------------------------
 * POST /api/support
 * Receives the Help Center contact form and emails it to your
 * support inbox via nodemailer. Swap in your real SMTP/provider
 * credentials via environment variables.
 */

import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = Router();

// Basic abuse protection - 5 submissions per 15 min per IP.
const supportLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests. Please try again later.' },
});

const TOPIC_LABELS: Record<string, string> = {
  identification: 'Device identification issue',
  valuation: 'Metal estimate / valuation question',
  payment: 'Payment / order status',
  privacy: 'Privacy / data question',
  other: 'Something else',
};

function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

router.post('/support', supportLimiter, async (req: Request, res: Response) => {
  const { name, email, topic, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  const topicLabel = TOPIC_LABELS[topic] || 'General question';

  try {
    // If SMTP isn't configured yet (e.g. local dev), log it instead of failing.
    if (!process.env.SMTP_HOST || process.env.SMTP_HOST === 'smtp.yourprovider.com') {
      console.log('[support] (SMTP not configured, logging only):', { name, email, topic: topicLabel, message });
      return res.json({ ok: true, delivered: false });
    }

    const transport = buildTransport();
    await transport.sendMail({
      from: `"Cirql Support Form" <${process.env.SMTP_USER}>`,
      to: process.env.SUPPORT_INBOX || 'support@cirql.app',
      replyTo: email,
      subject: `[Cirql Support] ${topicLabel} — ${name}`,
      text: `From: ${name} <${email}>\nTopic: ${topicLabel}\n\n${message}`,
    });

    return res.json({ ok: true, delivered: true });
  } catch (err) {
    console.error('support route error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again shortly.' });
  }
});

export default router;
