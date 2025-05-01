import axios from "axios";

// Base URL untuk API Anda
const API_BASE_URL = "process.env.REACT_APP_API_BASE_URL";

// GET
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error saat mengambil data pengguna:", error);
    throw error;
  }
};

// POST
export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data; 
  } catch (error) {
    console.error("Error saat menambahkan pengguna baru:", error);
    throw error;
  }
};

// DELETE
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error saat menghapus pengguna:", error);
    throw error;
  }
};

// UPDATE
export const updateUser = async (userId, updatedData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${userId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error("Error saat memperbarui pengguna:", error);
      throw error;
    }
  };
  