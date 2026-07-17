import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  institutionId: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional(),
  templateId: z.string(),
  content: z.any(),
});

export const institutionSchema = z.object({
  name: z.string().min(1, 'Institution name is required'),
  state: z.string().min(1, 'State is required'),
  city: z.string().min(1, 'City is required'),
  district: z.string().min(1, 'District is required'),
  type: z.enum(['school', 'college', 'university', 'polytechnic', 'iti']),
});

export type RegisterData = z.infer<typeof registerSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type ProjectData = z.infer<typeof projectSchema>;
export type InstitutionData = z.infer<typeof institutionSchema>;
