import { Request, Response } from 'express';
import { db, InquiryRecord } from '../config/db.js';

export const submitCorporateInquiry = (req: Request, res: Response) => {
  try {
    const { companyName, contactName, email, phone, estimatedVolume, message } = req.body;

    if (!contactName || !email) {
      return res.status(400).json({ success: false, message: 'Contact name and email are required' });
    }

    const newInquiry: InquiryRecord = {
      id: `inq-corp-${Date.now()}`,
      type: 'corporate',
      companyName: companyName || 'Enterprise Partner',
      contactName,
      email,
      phone: phone || '',
      estimatedVolume: estimatedVolume || '50+ Units / 1 Ton+',
      message: message || 'Requesting corporate EPR & bulk decommissioning consultation.',
      createdAt: new Date().toISOString(),
    };

    const inquiries = db.get('inquiries');
    inquiries.unshift(newInquiry);
    db.set('inquiries', inquiries);

    return res.status(201).json({
      success: true,
      message: 'Corporate recycling inquiry received. Our enterprise EPR specialist will contact you within 4 business hours.',
      data: newInquiry,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const submitContactMessage = (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email and message are required' });
    }

    const newContact: InquiryRecord = {
      id: `inq-msg-${Date.now()}`,
      type: 'contact',
      contactName: name,
      email,
      phone: phone || '',
      message,
      createdAt: new Date().toISOString(),
    };

    const inquiries = db.get('inquiries');
    inquiries.unshift(newContact);
    db.set('inquiries', inquiries);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully! Our green support desk will reply shortly.',
      data: newContact,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
