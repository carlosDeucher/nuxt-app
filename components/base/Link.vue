<script setup lang="ts">
import { useTheme } from 'vuetify/lib/composables/theme.mjs';

const props = defineProps<{
    href: string;
}>()

const theme = useTheme();

const secondaryColor = theme.current.value.colors.secondary;

</script>

<style scoped>
a:hover {
    text-decoration: underline !important;
}
</style>


<template>
    <a class="text-decoration-none font-weight-bold" :href="props.href" :style="{ color: secondaryColor }">
        <slot></slot>
    </a>
</template>