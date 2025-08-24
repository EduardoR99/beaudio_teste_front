<template>
  <div class="bg-[#18181c] m-auto w-full max-w-[450px] sm:max-w-[400px] md:max-w-[450px] rounded-lg shadow-lg mt-10">
    <form class="flex flex-col py-8 px-4 sm:px-8 gap-5 justify-center" @submit.prevent="handleRegister">
      <div class="flex text-[#e4e4f6] mx-auto font-bold text-2xl sm:text-3xl mb-2">
        To<span class="text-[#8464f5]">Do</span>
      </div>
      <InputLogin id="name" label="Nome Completo" v-model="name" type="text" />
      <InputLogin id="email" label="E-mail" v-model="email" type="text" />
      <InputLogin id="password" label="Senha" v-model="password" type="password" />
      <InputLogin id="confirm-password" label="Confirmar Senha" v-model="confirmPassword" type="password" />
      <div class="flex justify-end">
        <BaseButton type="button" @click="goLogin"
          btnClass="text-[#8464f5] cursor-pointer bg-transparent hover:text-[#e4e4f6] px-0 py-0 shadow-none">
          Já tem cadastro?
        </BaseButton>
      </div>
      <div class="flex justify-center flex-col sm:flex-row items-center gap-4">
        <BaseButton type="submit" class="w-full sm:w-auto">
          Cadastre-se
        </BaseButton>

      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import InputLogin from './InputLogin.vue';
import BaseButton from './BaseButton.vue';
import { register as registerRequest } from '../services/authService';

const router = useRouter();
const toast = useToast();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const goLogin = () => {
  router.push({ name: 'login' });
};

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    toast.error('As senhas não coincidem!');
    return;
  }
  try {
    await registerRequest(name.value, email.value, password.value);
    toast.success('Cadastro realizado com sucesso!');
    router.push('/login');
  } catch (err) {
    toast.error(err.response?.data?.message || 'Erro ao registrar');
  }
};
</script>