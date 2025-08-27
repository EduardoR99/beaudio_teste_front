<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4 mb-6">
    <InputLogin id="title" label="Título" v-model="title" type="text" required />
    <InputLogin id="description" label="Descrição" v-model="description" type="text" />
    <InputLogin id="time" label="Time" v-model="time" type="text" />
    <BaseButton type="submit" class="w-full font-semibold">
      Criar tarefa
    </BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import InputLogin from './InputLogin.vue'
import BaseButton from './BaseButton.vue'

const emit = defineEmits(['submit'])

const title = ref('')
const description = ref('')
const time = ref('')

const onSubmit = () => {
  if (!title.value) return
  emit('submit', { title: title.value, description: description.value, time: time.value })
  title.value = ''
  description.value = ''
  time.value = ''
}
</script>