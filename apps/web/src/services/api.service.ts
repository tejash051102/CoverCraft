import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add token to requests
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  // Auth
  async register(email: string, password: string, name: string) {
    return this.client.post('/auth/register', { email, password, name });
  }

  async login(email: string, password: string) {
    return this.client.post('/auth/login', { email, password });
  }

  async logout() {
    return this.client.post('/auth/logout');
  }

  // Users
  async getProfile() {
    return this.client.get('/users/profile');
  }

  async updateProfile(data: any) {
    return this.client.put('/users/profile', data);
  }

  // Institutions
  async getInstitutions(params?: any) {
    return this.client.get('/institutions', { params });
  }

  async searchInstitutions(query: string) {
    return this.client.get('/institutions/search/autocomplete', { params: { q: query } });
  }

  async getInstitution(id: string) {
    return this.client.get(`/institutions/${id}`);
  }

  // Templates
  async getTemplates() {
    return this.client.get('/templates');
  }

  async getTemplate(id: string) {
    return this.client.get(`/templates/${id}`);
  }

  async createTemplate(data: any) {
    return this.client.post('/templates', data);
  }

  // Projects
  async getProjects() {
    return this.client.get('/projects');
  }

  async getProject(id: string) {
    return this.client.get(`/projects/${id}`);
  }

  async createProject(data: any) {
    return this.client.post('/projects', data);
  }

  async updateProject(id: string, data: any) {
    return this.client.put(`/projects/${id}`, data);
  }

  async deleteProject(id: string) {
    return this.client.delete(`/projects/${id}`);
  }

  async exportProject(id: string, format: 'pdf' | 'png' | 'jpg' | 'svg') {
    return this.client.post(`/projects/${id}/export`, { format }, { responseType: 'blob' });
  }

  // Upload
  async uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.client.post('/upload/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export const apiService = new ApiService();
