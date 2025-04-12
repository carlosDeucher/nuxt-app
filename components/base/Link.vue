<script setup lang="ts">
import { useTheme } from 'vuetify/lib/composables/theme.mjs';

const props = defineProps<{
    href: string;
    color?: string;
}>()

const theme = useTheme();

const color = theme.current.value.colors[props.color || "secondary"];

</script>

<style scoped>
a:hover {
    text-decoration: underline !important;
}
</style>


<template>
    <a class="text-decoration-none font-weight-bold" :href="props.href" :style="{ color: color }">
        <slot></slot>
    </a>
</template>