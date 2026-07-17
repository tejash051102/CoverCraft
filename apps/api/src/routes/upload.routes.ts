import express, { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { asyncHandler } from '../middleware/error.middleware';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

// TODO: Implement upload routes
// - POST /image (protected, upload image)
// - POST /logo (protected, upload logo)
// - POST /signature (protected, upload signature)
// - POST /font (protected, upload custom font)
// - DELETE /:id (protected, delete file)

export default router;
