import express, { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';

const router = Router();

// TODO: Implement auth routes
// - POST /register
// - POST /login
// - POST /logout
// - POST /refresh-token
// - POST /forgot-password
// - POST /reset-password
// - POST /verify-email
// - GET /me (protected)

export default router;
