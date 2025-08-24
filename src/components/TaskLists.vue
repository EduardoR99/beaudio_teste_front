<template>
  <ul class="flex flex-col gap-3 mb-6">
    <TaskListItem
      v-for="list in lists"
      :key="list.id"
      :list="list"
      @delete="$emit('delete', $event)"
    />
  </ul>
</template>

<script setup>
import TaskListItem from './TaskListItem.vue'
const props = defineProps({
  lists: Array
})
</script>