import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export async function getTaskLists(token) {
  const res = await axios.get(`${API_URL}/tasklists`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function createTaskList(name, color, token) {
  const res = await axios.post(`${API_URL}/tasklists`, { name, color }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function deleteTaskList(id, token) {
  const res = await axios.delete(`${API_URL}/tasklists/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}