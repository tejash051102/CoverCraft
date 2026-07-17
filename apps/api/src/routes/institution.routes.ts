import express, { Router } from 'express';
import { optionalAuthMiddleware } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';

const router = Router();

// TODO: Implement institution routes
// - GET / (search, filter, paginate)
// - GET /:id
// - POST / (admin only)
// - PUT /:id (admin only)
// - DELETE /:id (admin only)
// - GET /search/autocomplete
// - POST /request-addition

export default router;
