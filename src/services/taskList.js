import axios from 'axios'

export async function getTaskLists(token) {
  const res = await axios.get('http://localhost:3000/tasklists', {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function createTaskList(name, color, token) {
  const res = await axios.post('http://localhost:3000/tasklists', { name, color }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}

export async function deleteTaskList(id, token) {
  const res = await axios.delete(`http://localhost:3000/tasklists/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return res.data
}