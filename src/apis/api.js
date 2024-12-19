import axios from "axios";
import { getToken } from "../helpers/localStorage";

const baseUrl = "https://blogbackend-6295.onrender.com/api/v1/";

// Create the Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
});

// Request interceptor to attach the Authorization token if it exists
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - Redirecting to login...");
      // Optional: Handle token expiration or redirection to login
    }
    return Promise.reject(error);
  }
);

// Helper functions for making API calls
export const getApi = (url, params) => {
  return axiosInstance.get(url, { params });
};

export const postApi = (url, data, config = {}) => {
  return axiosInstance.post(url, data, config);
};

export const putApi = (url, data, config = {}) => {
  return axiosInstance.put(url, data, config);
};

export const deleteApi = (url, data, config = {}) => {
  return axiosInstance.delete(url, { data, ...config });
};

export default axiosInstance;