import axios from "axios";
import { toast } from "react-toastify";

const API_BASE = "http://localhost:8080/api";

const privateApi = axios.create({
  baseURL: API_BASE,
  // withCredentials: true
});

const publicApi = axios.create({
  baseURL: API_BASE,
});

privateApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || "Something went wrong";

    if (status === 401) {
      toast.error("Session expired. Please login again.");
      localStorage.clear();
      setTimeout(() => {
        // window.location.href = "/";
      }, 2000);
    } 
    else if (status === 403) {
      toast.error("You are not authorized to perform this action.");
    } else if (status >= 500) {
      toast.error("Server error. Please try later.");
    } 
    else {
      toast.error(message);
    }

    return Promise.reject(error);
  }
);

export const login = async (formData) => {
  const response = await publicApi.post("/auth/login", formData, {});
  return response;
};

export const fetchAll = async () => {
  const response = await privateApi.get("/users", {});
  return response;
};

export const addUser = async (formData) => {
  const response = await privateApi.post("/users", formData, {});
  return response;
};

export const editUser = async (id, formData) => {
  const response = await privateApi.put(`/users/update/${id}`, formData, {});
  return response;
};

export const fetchAccount = async () => {
  const response = await privateApi.get("/account", {});
  return response;
};

export const fetchAssociatedAccs = async (id) => {
  const response = await privateApi.get(`/account/get/${id}`, {});
  return response;
};

export const addAccount = async (formData) => {
  const response = await privateApi.post("/account", formData, {});
  return response;
};

export const fetchCostReport = async (startDate, endDate,groupBy) => {
  const { data } = await privateApi.get("/report", {
    params: { startDate, endDate,groupBy }
  });
  return data;
};

export const getProfile = async () => {
  const response = await privateApi.get("/users/profile", {});
  return response;
};


