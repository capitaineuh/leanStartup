import axios from 'axios';

// Configuration d'axios
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const API_URL = '/api';

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isArtisan: boolean;
  metier?: string;
}

export interface RegisterResponse {
  isArtisan: boolean;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

class AuthService {
  async register(data: RegisterData): Promise<RegisterResponse> {
    try {
      const response = await axios.post<RegisterResponse>(`${API_URL}/auth/register`, data);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Une erreur est survenue lors de l\'inscription');
    }
  }

  async login(data: LoginData): Promise<LoginResponse> {
    try {
      const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, data);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Email ou mot de passe incorrect');
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (error) {
      this.logout();
      return null;
    }
  }
}

export default new AuthService(); 