<template>
  <div class="flex flex-col">
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :class="inputClass"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="attrs"
    />
  </div>
</template>

<script setup>
import { defineProps, useAttrs } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
  labelClass: {
    type: String,
    default: 'text-[#8464f5]'
  },
  inputClass: {
    type: String,
    default: 'p-2 bg-[#131215] text-[#e4e4f6] focus:outline-none focus:ring-2 focus:ring-[#8464f5]'
  }
});
const attrs = useAttrs();
</script>