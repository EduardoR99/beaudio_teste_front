<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4 mb-6">
    <InputLogin id="name" label="Nome da lista" v-model="name" type="text" required />
    <div>
      <label class="text-[#8464f5] mb-1 block font-medium">Cor</label>
      <div class="flex gap-2 flex-wrap">
        <button
          v-for="preset in presetColors"
          :key="preset"
          type="button"
          :aria-label="`Selecionar cor ${preset}`"
          :style="{ backgroundColor: preset, border: color === preset ? '3px solid #fff' : '2px solid #8464f5' }"
          class="w-8 h-8 rounded-full focus:outline-none cursor-pointer transition-all duration-200"
          @click="color = preset"
        >
          <span v-if="color === preset" class="block w-full h-full rounded-full border-2 border-[#8464f5]"></span>
        </button>
      </div>
    </div>
    <BaseButton
      type="submit"
      class="w-full font-semibold"
      :disabled="disabled"
    >
      Criar lista
    </BaseButton>
    <div v-if="disabled" class="text-yellow-400 text-center text-sm">
      Limite de 10 listas atingido.
    </div>
  </form>
</template>

<script setup>
import { ref, watch, toRefs } from 'vue'
import InputLogin from './InputLogin.vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  presetColors: Array,
  disabled: Boolean
})
const emit = defineEmits(['submit'])

const name = ref('')
const color = ref(props.presetColors?.[0] || '#8464f5')

watch(() => props.presetColors, (newVal) => {
  if (newVal && newVal.length > 0) color.value = newVal[0]
})

const onSubmit = () => {
  if (!name.value) return
  emit('submit', { name: name.value, color: color.value })
  name.value = ''
  color.value = props.presetColors?.[0] || '#8464f5'
}
</script>