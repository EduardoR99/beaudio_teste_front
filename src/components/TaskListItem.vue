<template>
    <li class="flex items-center gap-3 bg-[#23232b] rounded-lg px-4 py-2 shadow transition hover:bg-[#23234b]">
        <router-link :to="{ name: 'tasklist', params: { id: list.id }, query: { color: list.color, name: list.name } }"
            class="flex-1">
            <span :style="{ backgroundColor: list.color, color: '#fff' }" class="px-3 py-1 rounded font-medium shadow">
                {{ list.name }}
            </span>
        </router-link>
        <button @click="$emit('delete', list.id)"
            class="text-red-400 hover:text-red-600 font-semibold transition cursor-pointer">
            Excluir
        </button>
    </li>
</template>

<script setup>
const props = defineProps({
    list: Object
})
</script>