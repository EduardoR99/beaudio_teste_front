import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export async function login(email, password) {
  const res = await axios.post(`${API_URL}/auth/login`, {
    email,
    password
  })
  return res.data
}

export async function register(name, email, password) {
  const res = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password
  })
  return res.data
}