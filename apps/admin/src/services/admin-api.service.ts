import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

class AdminApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  // Dashboard
  async getDashboardStats() {
    return this.client.get('/admin/dashboard/stats');
  }

  // Users Management
  async getUsers(params?: any) {
    return this.client.get('/admin/users', { params });
  }

  async getUserDetails(id: string) {
    return this.client.get(`/admin/users/${id}`);
  }

  async banUser(id: string, reason: string) {
    return this.client.post(`/admin/users/${id}/ban`, { reason });
  }

  // Templates Management
  async getTemplates(params?: any) {
    return this.client.get('/admin/templates', { params });
  }

  async approveTemplate(id: string) {
    return this.client.post(`/admin/templates/${id}/approve`);
  }

  async rejectTemplate(id: string, reason: string) {
    return this.client.post(`/admin/templates/${id}/reject`, { reason });
  }

  // Institutions Management
  async getInstitutions(params?: any) {
    return this.client.get('/admin/institutions', { params });
  }

  async createInstitution(data: any) {
    return this.client.post('/admin/institutions', data);
  }

  async updateInstitution(id: string, data: any) {
    return this.client.put(`/admin/institutions/${id}`, data);
  }

  async deleteInstitution(id: string) {
    return this.client.delete(`/admin/institutions/${id}`);
  }

  // Institution Requests
  async getInstitutionRequests() {
    return this.client.get('/admin/institution-requests');
  }

  async approveInstitutionRequest(id: string) {
    return this.client.post(`/admin/institution-requests/${id}/approve`);
  }
}

export const adminApiService = new AdminApiService();
