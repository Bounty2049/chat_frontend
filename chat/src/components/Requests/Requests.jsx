import axios from 'axios';

const COMMON_API_URL = 'http://127.0.0.1:8000/users/api/'


// Настройки по дефолту для всех апи
axios.defaults.baseURL = COMMON_API_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem('access_token')}`
}
axios.defaults.withCredentials = true

// Настройки для инстансов
const loginApi = axios.create({
  baseURL: `${COMMON_API_URL}reg/`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  },
});

const registrationApi = axios.create({
  baseURL: `${GET_API_URL}auth/`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  },
  data: {
    email: '',
    username: '',
    password: ''    
  }
});

export const login = async () => {
  const res = await loginApi.post()
};

export const registration = async () => {
  const res = await registrationApi.post()
}