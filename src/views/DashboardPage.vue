<template>
  <div class="bg-[#131215] flex justify-center min-h-screen py-10">
    <div class="flex flex-col bg-[#18181c] p-6 m-4 w-full max-w-md rounded-xl shadow-lg h-[50%]">
      <h2 class="text-[#8464f5] text-2xl font-bold mb-6 text-center tracking-wide">Suas listas de Tarefas</h2>
      <TaskListForm
        :presetColors="presetColors"
        :disabled="taskLists.length >= 10"
        @submit="handleCreate"
      />
      <div v-if="error" class="text-red-500 mb-4 text-center">{{ error }}</div>
      <TaskLists :lists="taskLists" @delete="handleDelete" />
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TaskListForm from '../components/TaskListForm.vue'
import TaskLists from '../components/TaskLists.vue'
import { getTaskLists, createTaskList as createTaskListRequest, deleteTaskList } from '../services/taskList.js'

const taskLists = ref([])
const error = ref('')
const router = useRouter()

const presetColors = [
  '#8464f5', '#FF5733', '#33C1FF', '#28A745', '#FFC300', '#E83E8C', '#6C757D'
]

const token = localStorage.getItem('token')

const fetchTaskLists = async () => {
  try {
    const res = await getTaskLists(token)
    taskLists.value = res.taskLists
  } catch (err) {
    error.value = 'Erro ao carregar listas'
  }
}

const handleCreate = async ({ name, color }) => {
  if (taskLists.value.length >= 10) {
    error.value = 'Você atingiu o limite de 10 listas.'
    return
  }
  try {
    await createTaskListRequest(name, color, token)
    fetchTaskLists()
  } catch (err) {
    error.value = 'Erro ao criar lista'
  }
}

const handleDelete = async (id) => {
  try {
    await deleteTaskList(id, token)
    fetchTaskLists()
  } catch (err) {
    error.value = 'Erro ao deletar lista'
  }
}

onMounted(fetchTaskLists)
</script>