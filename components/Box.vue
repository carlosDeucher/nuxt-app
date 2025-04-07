<script setup lang="ts">
const props = defineProps<{
    sx?: string;
}>()
</script>

<template>
    <div class="d-block" :style="props.sx">
        <slot></slot>
    </div>
</template>
