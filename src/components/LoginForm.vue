<template>
  <div class="bg-[#18181c] m-auto w-full max-w-[400px] sm:max-w-[350px] md:max-w-[400px] rounded-lg shadow-lg mt-10">
    <form class="flex flex-col py-8 px-4 sm:px-8 gap-5 justify-center" @submit.prevent="handleLogin">
      <div class="flex text-[#e4e4f6] mx-auto font-bold text-2xl sm:text-3xl mb-2">
        To<span class="text-[#8464f5]">Do</span>
      </div>
      <InputLogin id="email" label="E-mail" v-model="email" type="text" class="mb-2" />
      <InputLogin id="password" label="Senha" v-model="password" type="password" class="mt-2" />
      <div class="flex justify-end">
        <BaseButton type="button" @click="goRegister"
          btnClass="text-[#8464f5] cursor-pointer bg-transparent hover:text-[#e4e4f6] px-0 py-0 shadow-none">
          Registre-se
        </BaseButton>
      </div>
      <div class="flex justify-center">
        <BaseButton type="submit" class="w-full sm:w-auto">
          Entrar
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import InputLogin from './InputLogin.vue'
import BaseButton from './BaseButton.vue'
import { login as loginRequest } from '../services/authService'

const router = useRouter()
const toast = useToast()
const email = ref('')
const password = ref('')

const goRegister = () => {
  router.push({ name: 'register' })
}

const handleLogin = async () => {
  try {
    const data = await loginRequest(email.value, password.value)
    localStorage.setItem('token', data.token)
    toast.success('Login realizado com sucesso!')
    router.push('/dashboard')
  } catch (err) {
    toast.error(err.response?.data?.message || 'Erro ao fazer login')
  }
}
</script>