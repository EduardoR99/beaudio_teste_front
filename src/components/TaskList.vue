<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :listColor="listColor"
      :editing="editingId === task.id"
      :editTitle="editingId === task.id ? editTitle : ''"
      :editDescription="editingId === task.id ? editDescription : ''"
      @edit="startEdit"
      @save="saveEdit"
      @cancel-edit="cancelEdit"
      @delete="handleDelete"
      @toggle-completed="toggleCompleted"
    />
  </ul>
</template>

<script setup>
import TaskItem from './TaskItem.vue'
const props = defineProps({
  tasks: Array,
  listColor: String,
  editingId: Number,
  editTitle: String,
  editDescription: String,
})
const emit = defineEmits(['edit', 'save', 'cancel-edit', 'delete', 'toggle-completed'])

const startEdit = (task) => emit('edit', task)
const saveEdit = (task) => emit('save', task)
const cancelEdit = () => emit('cancel-edit')
const handleDelete = (id) => emit('delete', id)
const toggleCompleted = (task) => emit('toggle-completed', task)
</script>