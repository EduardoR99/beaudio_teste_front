<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import BaseButton from './BaseButton.vue'

const router = useRouter()
const route = useRoute()

const isLogged = ref(!!localStorage.getItem('token'))

watch(route, () => {
  isLogged.value = !!localStorage.getItem('token')
})

const logout = () => {
  localStorage.removeItem('token')
  isLogged.value = false
  router.push('/login')
}
</script>

<template>
  <header class="w-full p-3 bg-[#18181c] sm:translate-x-0 ">
    <div class="flex justify-between items-center text-[#e4e4f6] mx-auto font-bold">
      <span>
        To<span class="text-[#8464f5]">Do</span>
      </span>
      <BaseButton
        v-if="isLogged"
        @click="logout"
        btnClass="text-[#8464f5] font-normal px-3 py-1 rounded hover:bg-[#8464f5] hover:text-[#18181c] transition cursor-pointer"
      >
        Sair
      </BaseButton>
    </div>
  </header>
</template>