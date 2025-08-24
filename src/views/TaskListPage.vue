<template>
  <div class="bg-[#131215] flex justify-center min-h-screen py-10">
    <div class="flex flex-col bg-[#18181c] p-6 m-4 w-full max-w-5xl rounded-xl shadow-lg h-[50%]">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-[#8464f5] text-2xl font-bold text-center tracking-wide flex-1">
          Lista de Tarefas: {{ route.query.name || '...' }}
        </h2>
        <BaseButton type="button" @click="goBack"
          btnClass="bg-[#8464f5] text-white px-4 py-2 rounded ml-4 hover:bg-[#6a4fd5] font-semibold cursor-pointer">
          Voltar
        </BaseButton>
      </div>
      <TaskForm @submit="handleCreateTask" />
      <div v-if="error" class="text-red-500 mb-4 text-center">{{ error }}</div>
      <TaskList
        :tasks="tasks"
        :listColor="listColor"
        :editingId="editingId"
        :editTitle="editTitle"
        :editDescription="editDescription"
        @edit="startEdit"
        @save="saveEdit"
        @cancel-edit="cancelEdit"
        @delete="handleDelete"
        @toggle-completed="toggleCompleted"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import BaseButton from '../components/BaseButton.vue'
import { getTasks, createTask as createTaskRequest, updateTask, deleteTask } from '../services/task.js'

const route = useRoute()
const router = useRouter()
const tasks = ref([])
const error = ref('')
const token = localStorage.getItem('token')
const listColor = ref(route.query.color || '#8464f5')

const editingId = ref(null)
const editTitle = ref('')
const editDescription = ref('')

const fetchTasks = async () => {
  try {
    const res = await getTasks(route.params.id, token)
    tasks.value = res.tasks
  } catch (err) {
    error.value = 'Erro ao carregar tarefas'
  }
}

const handleCreateTask = async ({ title, description }) => {
  try {
    await createTaskRequest(
      title,
      description,
      Number(route.params.id),
      token
    )
    fetchTasks()
  } catch (err) {
    error.value = 'Erro ao criar tarefa'
  }
}

const startEdit = (task) => {
  editingId.value = task.id
  editTitle.value = task.title
  editDescription.value = task.description
}

const cancelEdit = () => {
  editingId.value = null
  editTitle.value = ''
  editDescription.value = ''
}

const saveEdit = async (task) => {
  try {
    await updateTask(task.id, {
      title: task.title,
      description: task.description,
      completed: task.completed
    }, token)
    editingId.value = null
    fetchTasks()
  } catch (err) {
    error.value = 'Erro ao editar tarefa'
  }
}

const handleDelete = async (id) => {
  try {
    await deleteTask(id, token)
    fetchTasks()
  } catch (err) {
    error.value = 'Erro ao deletar tarefa'
  }
}

const toggleCompleted = async (task) => {
  try {
    await updateTask(task.id, {
      title: task.title,
      description: task.description,
      completed: !task.completed
    }, token)
    fetchTasks()
  } catch (err) {
    error.value = 'Erro ao atualizar status'
  }
}

const goBack = () => {
  router.push({ name: 'dashboard' })
}

onMounted(fetchTasks)
</script>