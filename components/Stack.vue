<script setup lang="ts">
const props = defineProps<{
    sx?: string;
}>()
</script>

<template>
    <div class="d-flex" :style="props.sx">
        <slot></slot>
    </div>
</template>
