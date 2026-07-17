import express, { Router } from 'express';
import { authMiddleware, optionalAuthMiddleware } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';

const router = Router();

// TODO: Implement template routes
// - GET / (list templates)
// - GET /:id (get template details)
// - POST / (protected, create template)
// - PUT /:id (protected, update template)
// - DELETE /:id (protected, delete template)
// - POST /:id/duplicate (protected)

export default router;
