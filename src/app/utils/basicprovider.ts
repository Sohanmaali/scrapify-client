
import { getToken, removeToken } from "@/app/utils/auth";
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
interface ApiResponse<T = any> {
  data: T;
  message?: string;
  statusCode?: number;
  error?: string;
}



class BasicProvider {
  private url: string;
  constructor(url: string) {
    this.url = process.env.NEXT_PUBLIC_API_URL + '/api/' + url;
  }

  async getRequest<T>(): Promise<ApiResponse<T>> {
    try {
      const config = this.getHeaders();
      if (this.url.includes('files')) {
        config.responseType = 'blob';
      }
      const response = await axios.get<ApiResponse<T>>(this.url, config);
      return this.processResponse(response);
    } catch (error) {
      return this.handleException(error);
    }
  }

  async postRequest<T>(data: any): Promise<ApiResponse<T>> {
    try {
      const response = await axios.post<ApiResponse<T>>(this.url, data, this.getHeaders(data));
      return response.data;
      // return this.processResponse(response);
    } catch (error) {
      return this.handleException(error);
    }
  }

  async getPdf(): Promise<Blob> {
    try {
      const config = this.getHeaders();
      config.responseType = 'blob';
      const response = await axios.get<Blob>(this.url, config);
      return this.processResponse(response);
    } catch (error) {
      return this.handleException(error);
    }
  }

  private processResponse<T>(response: AxiosResponse<any>): T {
    if (response.status >= 200 && response.status < 300) {
      if ((response.data as any)?.data) {
        return response?.data;
      }
      return response as unknown as T;
    }
    throw new Error(`Error: ${response.status} - ${(response.data as any)?.message || 'Unknown error'}`);
  }

  private getHeaders(data?: any): AxiosRequestConfig {
    const headers: Record<string, string> = {};

    if (data instanceof FormData) {
      headers['Content-Type'] = 'multipart/form-data';
    } else {
      headers['Content-Type'] = 'application/json';
    }
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return { headers };
  }



  private handleException(error: any): never {
    // if (process.env.NEXT_APP_DEBUG) {
    //   console.error(error.response?.data);
    // }
    if (error.response?.data.statusCode === 401) {
      removeToken();
    }
    if (error.response?.data.statusCode === 403) {
      removeToken()
      window.location.href = '/pages/auth/login';
    }
    throw error.response?.data || error.response || error;
  }

  async putRequest<T>(data: any): Promise<ApiResponse<T>> {
    try {
      const response = await axios.put<ApiResponse<T>>(this.url, data, this.getHeaders());
      return this.processResponse(response);
    } catch (error) {
      return this.handleException(error);
    }
  }

  async patchRequest<T>(data: any): Promise<ApiResponse<T>> {
    try {
      const response = await axios.patch<ApiResponse<T>>(this.url, data, this.getHeaders(data));
      return this.processResponse(response);
    } catch (error) {
      return this.handleException(error);
    }
  }

  async deleteRequest<T>(data: any): Promise<ApiResponse<T>> {
    try {
      const response = await axios.post<ApiResponse<T>>(this.url, data, this.getHeaders());
      return this.processResponse(response);
    } catch (error) {
      return this.handleException(error);
    }
  }
}

export default BasicProvider;