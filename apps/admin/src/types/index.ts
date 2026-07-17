export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'moderator' | 'support';
  permissions: string[];
}

export interface DashboardStats {
  totalUsers: number;
  activeProjects: number;
  totalTemplates: number;
  totalInstitutions: number;
  usersGrowth: number;
  projectsGrowth: number;
}

export interface InstitutionRequest {
  id: string;
  name: string;
  state: string;
  city: string;
  type: string;
  logo?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}
