import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routes/api.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000'],
  credentials: true,
}));

// Increase JSON payload limit to accept high-res camera device photos for Gemini Vision AI
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Request logging in development
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (req.path.startsWith('/api')) {
      console.log(`[API] ${req.method} ${req.path} ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// API Routes
app.use('/api', apiRouter);

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🌱 Cirql Backend Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints ready at http://localhost:${PORT}/api/health`);
  console.log(`🤖 Google Gemini Vision AI: ${process.env.GEMINI_API_KEY ? 'Active (Live Key)' : 'Active (Local AI Fallback Mode)'}`);
  console.log(`🗺️ Google Maps / Geocoding: ${process.env.GOOGLE_MAPS_API_KEY ? 'Active (Live Key)' : 'Active (High-Accuracy Local Mode)'}\n`);
});

export default app;
