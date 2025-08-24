import axios from 'axios'

export async function login(email, password) {
  const res = await axios.post('http://localhost:3000/auth/login', {
    email,
    password
  })
  return res.data
}

export async function register(name, email, password) {
  const res = await axios.post('http://localhost:3000/auth/register', {
    name,
    email,
    password
  })
  return res.data
}