import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db, UserRecord } from '../config/db.js';
import { OAuth2Client } from 'google-auth-library';

const JWT_SECRET = process.env.JWT_SECRET || 'cirql_jwt_secret_dev_2026';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' });
    }

    const users = db.get('users');
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser: UserRecord = {
      id: `usr-${Date.now()}`,
      name,
      email: email.toLowerCase(),
      passwordHash,
      phone: phone || '',
      cirqlCoins: 100, // Welcome signup bonus
      totalEwasteKg: 0,
      co2SavedKg: 0,
      treesPlanted: 0,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    db.set('users', users);

    const token = jwt.sign({ id: newUser.id, email: newUser.email, name: newUser.name }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const { passwordHash: _, ...safeUser } = newUser;

    return res.status(201).json({
      success: true,
      message: 'Account successfully registered! +100 Cirql Coins credited.',
      data: {
        user: safeUser,
        token,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const users = db.get('users');
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    if (user.passwordHash) {
      const match = await bcrypt.compare(password, user.passwordHash);
      if (!match) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    }

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const { passwordHash: _, ...safeUser } = user;

    return res.json({
      success: true,
      message: 'Signed in successfully',
      data: {
        user: safeUser,
        token,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const googleAuth = async (req: Request, res: Response) => {
  try {
    const { googleToken } = req.body;

    if (!googleToken) {
      return res.status(400).json({
        success: false,
        message: 'Google ID token is required',
      });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: googleToken,
      audience: GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) {
      return res.status(401).json({
        success: false,
        message: 'Invalid Google ID token',
      });
    }

    const verifiedEmail = payload.email;
    const verifiedName = payload.name || 'Google User';

    if (!verifiedEmail) {
      return res.status(401).json({
        success: false,
        message: 'Google account email could not be verified',
      });
    }

    const googleId = payload.sub;
    const avatar = payload.picture || '';
    const userEmail = verifiedEmail.toLowerCase();
    const userName = verifiedName;

    const users = db.get('users');
    let user = users.find((u) => u.email.toLowerCase() === userEmail);

    if (!user) {
      user = {
        id: `usr-${Date.now()}`,
        name: userName,
        email: userEmail,
        googleId: googleId || undefined,
        avatar: avatar || undefined,
        cirqlCoins: 150,
        totalEwasteKg: 0,
        co2SavedKg: 0,
        treesPlanted: 0,
        createdAt: new Date().toISOString(),
      };
      users.push(user);
      db.set('users', users);
    }

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const { passwordHash: _, ...safeUser } = user;

    return res.json({
      success: true,
      message: 'Authenticated with Google successfully',
      data: {
        user: safeUser,
        token,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authorization token required' });
    }

    const token = authHeader.split(' ')[1];
    const decoded: any = jwt.verify(token, JWT_SECRET);

    const users = db.get('users');
    const user = users.find((u) => u.id === decoded.id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const { passwordHash: _, ...safeUser } = user;
    return res.json({ success: true, data: { user: safeUser } });
  } catch (error: any) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
