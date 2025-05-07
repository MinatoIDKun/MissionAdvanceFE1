// import axios from 'axios';

// // Buat instance axios dengan konfigurasi dasar
// const apiClient = axios.create({
//   baseURL: 'process.env.REACT_APP_API_BASE_URL', // Ganti dengan URL API yang sebenarnya
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Interceptor untuk menangani token
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Service untuk autentikasi
// const authService = {
//   // Fungsi untuk registrasi
//   register: async (userData) => {
//     try {
//       const response = await apiClient.post('/register', userData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   // Fungsi untuk login
//   login: async (credentials) => {
//     try {
//       const response = await apiClient.post('/login', credentials);
      
//       // Simpan token ke localStorage jika ada
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//       }
      
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   // Fungsi untuk logout
//   logout: () => {
//     localStorage.removeItem('token');
//   },

//   // Fungsi untuk mendapatkan data user yang sedang login
//   getCurrentUser: async () => {
//     try {
//       const response = await apiClient.get('/user/profile');
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },

//   // Fungsi untuk cek apakah user sudah login
//   isAuthenticated: () => {
//     return localStorage.getItem('token') !== null;
//   }
// };

// export default authService;