<template>
  <li
    class="flex flex-col rounded-lg px-4 py-3 shadow transition hover:brightness-95"
    :style="{ backgroundColor: listColor }"
  >
    <div v-if="!editing">
      <div class="flex items-center justify-between">
        <span class="font-semibold text-[#e4e4f6]">{{ task.title }}</span>
        <div class="flex gap-2">
          <button
            v-if="typeof task.completed === 'boolean'"
            @click="$emit('toggle-completed', task)"
            :class="task.completed ? 'bg-green-500 text-white' : 'bg-yellow-500 text-[#18181c]'"
            class="text-xs px-2 py-1 rounded font-semibold transition cursor-pointer"
            :title="task.completed ? 'Marcar como pendente' : 'Marcar como concluída'"
          >
            {{ task.completed ? 'Concluída' : 'Pendente' }}
          </button>
          <button @click="$emit('edit', task)"
            class="text-blue-400 hover:text-blue-600 font-semibold transition text-xs cursor-pointer">Editar</button>
          <button @click="$emit('delete', task.id)"
            class="text-red-400 hover:text-red-600 font-semibold transition text-xs cursor-pointer">Excluir</button>
        </div>
      </div>
      <p class="text-[#e4e4f6] text-xs mt-1" v-if="task.time">
        <span class="font-semibold">Time:</span> {{ task.time }}
      </p>
      <p class="text-[#bdbddd] mt-1 break-words whitespace-pre-line" v-if="task.description">
        {{ task.description }}
      </p>
    </div>
    <div v-else>
      <InputLogin :id="`edit-title-${task.id}`" label="Título" v-model="editTitle" type="text" required />
      <InputLogin :id="`edit-desc-${task.id}`" label="Descrição" v-model="editDescription" type="text" class="break-words" />
      <InputLogin :id="`edit-time-${task.id}`" label="Time" v-model="editTime" type="text" />
      <div class="flex gap-2 mt-2">
        <BaseButton @click="save" class="w-full font-semibold">Salvar</BaseButton>
        <BaseButton @click="$emit('cancel-edit')" class="w-full font-semibold bg-gray-500 hover:bg-gray-600">Cancelar</BaseButton>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue'
import InputLogin from './InputLogin.vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  task: Object,
  listColor: String,
  editing: Boolean,
  editTitle: String,
  editDescription: String,
})
const emit = defineEmits(['save', 'cancel-edit', 'edit', 'delete', 'toggle-completed'])

const editTitle = ref(props.editTitle || '')
const editDescription = ref(props.editDescription || '')
const editTime = ref(props.task.time || '')

watch(() => props.editTitle, val => editTitle.value = val)
watch(() => props.editDescription, val => editDescription.value = val)
watch(() => props.task.time, val => editTime.value = val)

const save = () => {
  emit('save', { ...props.task, title: editTitle.value, description: editDescription.value, time: editTime.value })
}
</script>