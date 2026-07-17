export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
  createdAt: string;
}

export interface Institution {
  id: string;
  name: string;
  state: string;
  city: string;
  district: string;
  logo?: string;
  logoUrl?: string;
  colors?: string[];
  website?: string;
  type: 'school' | 'college' | 'university' | 'polytechnic' | 'iti';
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail?: string;
  content: CanvasContent;
  isDefault: boolean;
  isPremium?: boolean;
  createdBy?: string;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description?: string;
  templateId: string;
  content: CanvasContent;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
  versions: ProjectVersion[];
}

export interface ProjectVersion {
  id: string;
  content: CanvasContent;
  createdAt: string;
  name: string;
}

export interface CanvasContent {
  width: number;
  height: number;
  objects: CanvasObject[];
  backgroundColor?: string;
  version: string;
}

export interface CanvasObject {
  id: string;
  type: 'text' | 'image' | 'shape' | 'icon' | 'qrcode';
  left: number;
  top: number;
  width: number;
  height: number;
  angle: number;
  fill?: string;
  stroke?: string;
  opacity: number;
  locked?: boolean;
  zIndex: number;
  properties: Record<string, any>;
}
