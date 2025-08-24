<template>
  <button
    :type="type"
    :class="btnClass"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  btnClass: {
    type: String,
    default: 'text-[#131215] px-3 py-2 bg-[#8464f5] rounded-sm w-[20%] hover:bg-[#18181c] cursor-pointer hover:text-[#8464f5]'
  }
});
</script>