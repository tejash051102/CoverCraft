import express, { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';

const router = Router();

// TODO: Implement project routes
// - GET / (protected, list projects)
// - GET /:id (protected, get project)
// - POST / (protected, create project)
// - PUT /:id (protected, update project)
// - DELETE /:id (protected, delete project)
// - POST /:id/export (protected, export as PDF/PNG/etc)
// - POST /:id/share (protected)
// - PUT /:id/restore/:version (protected, restore version)

export default router;
