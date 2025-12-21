import axios from 'axios';

const API_BASE="http://localhost:8080/api";

const api=axios.create({
    baseURL:API_BASE,
    // withCredentials: true
});

export const fetchAll=async()=>{
    const response = await api.get("/users/getAll", {
      });
    return response;
}

export const addUser=async(formData)=>{
    const response = await api.post("/users/add", formData,{
      });
    return response;

}

export const editUser=async(id,formData)=>{
    const response = await api.put(`/users/update/${id}`, formData,{
      });
    return response;

}