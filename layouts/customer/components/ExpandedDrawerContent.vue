<template>
    <Stack class="flex-column fill-height">
        <Stack class="ga-4 border-sm border-gray-200 align-center px-2 justify-end pr-4" style="height: 70px;">
            <Stack sx="height: 35px; width: fit-content">
                <v-img src="/logo-light.png" :width="139" :height="35" alt="Logo">
                </v-img>
            </Stack>
        </Stack>

        <!-- Menu -->
        <Stack class="menu flex-column justify-space-between ga-4 pa-4 mt-6 flex-grow-1">
            <ul class="d-flex flex-column ga-4">
                <li v-for="page in menuPages" :key="page.path"
                    class="d-flex px-2 py-2 ga-2 rounded-lg hover:bg-gray-100 align-center cursor-pointer rounded-lg menu-option"
                    :class="{ 'selected': page.path === currentPage?.path }">
                    <v-icon size="30">mdi-view-dashboard</v-icon>
                    <span class="text-h4">{{ page.label }}</span>
                </li>
            </ul>
            <RouterLink v-slot="{ navigate, isActive }" to="/" custom>
                <Stack
                    class="px-2 py-2 ga-2 rounded-lg hover:bg-gray-100 align-center cursor-pointer rounded-lg menu-option"
                    :class="{ 'bg-gray-100': isActive }">
                    <v-icon size="30">mdi-cog</v-icon>
                    <span class="text-h4">Configurações</span>
                </Stack>
            </RouterLink>
        </Stack>

    </Stack>
</template>



<script setup lang="ts">
type Item = {
    title: string,
    value: string
}

type Page = {
    label: string,
    path: string
}

const { menuPages, currentPage } = defineProps<{ menuPages: Page[], currentPage: Page | undefined }>()
</script>
