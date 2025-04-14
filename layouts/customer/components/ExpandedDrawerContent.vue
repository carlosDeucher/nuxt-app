<template>
    <Stack class="flex-column fill-height">
        <Stack class="ga-4 border-sm border-gray-200 align-center px-4" style="height: 70px;">
            <Stack sx="height: 35px; width: fit-content">
                <v-img src="/logo-light.png" :width="139" :height="35" alt="Logo">
                </v-img>
            </Stack>
        </Stack>

        <!-- Menu -->
        <Stack class="menu">
            <ul class="d-flex flex-column ga-2">

                <li class="d-block" v-for="page in menuPages" :key="page.path">
                    <RouterLink :to="page.path" custom>
                        <Stack
                            class="menu-option"
                            :class="{ 'selected': page.path === currentPage?.path }">
                            <v-icon size="25">{{ page.icon }}</v-icon>
                            <span class="text-h5">{{ page.label }}</span>
                        </Stack>
                    </RouterLink>
                </li>
            </ul>
            <RouterLink to="/config" custom>
                <Stack
                    class="menu-option"
                    :class="{ 'selected': currentPage?.path?.includes('/config') }">
                    <v-icon size="25">mdi-cog</v-icon>
                    <span class="text-h5">Configurações</span>
                </Stack>
            </RouterLink>
        </Stack>

    </Stack>
</template>



<script setup lang="ts">
import type { Page } from '~/@types/IPageSidebarOption';
const { menuPages, currentPage } = defineProps<{ menuPages: Page[], currentPage: Page | undefined }>()
</script>
