import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export async function getTasks(taskListId, token) {
  const res = await axios.get(`${API_URL}/tasks?taskListId=${taskListId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function createTask(title, description, taskListId, token) {
  const res = await axios.post(`${API_URL}/tasks`, {
    title,
    description,
    taskListId
  }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function updateTask(id, data, token) {
  const res = await axios.put(`${API_URL}/tasks/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function deleteTask(id, token) {
  const res = await axios.delete(`${API_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}