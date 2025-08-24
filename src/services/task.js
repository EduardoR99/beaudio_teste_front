import axios from 'axios'

export async function getTasks(taskListId, token) {
  const res = await axios.get(`http://localhost:3000/tasks?taskListId=${taskListId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function createTask(title, description, taskListId, token) {
  const res = await axios.post('http://localhost:3000/tasks', {
    title,
    description,
    taskListId
  }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function updateTask(id, data, token) {
  const res = await axios.put(`http://localhost:3000/tasks/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function deleteTask(id, token) {
  const res = await axios.delete(`http://localhost:3000/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}