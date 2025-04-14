<template>
    <title>Imobia</title>

    <Stack class="fill-height">

        <!-- Desktop -->
        <div class="d-md-block fill-height bg-secondary border-sm border-secondary-dark"
            style="min-width: 300px; display: none;">

            <ExpandedDrawerContent :currentPage="currentPage" :menuPages="menuPages" />
        </div>
        <!-- Mobile -->
        <div class="d-md-none">
            <v-navigation-drawer class="bg-secondary" temporary v-model="drawer">
                <ExpandedDrawerContent :currentPage="currentPage" :menuPages="menuPages" />
            </v-navigation-drawer>
        </div>

        <Stack class="flex-column fill-height w-100">
            <header class="d-flex align-center border-sm border-gray-200 w-100 px-4" style="height: 70px;">
                <Stack class="justify-space-between align-center w-100">
                    <Stack class="ga-2 align-center">
                        <v-icon-btn class="d-md-none" style="display: block;" icon="mdi-menu" @click="drawer = true" />
                        <h1 class="text-h4">{{ currentPage?.label }}</h1>
                    </Stack>
                    <Stack class="ga-2 align-center">
                        <v-icon-btn icon="mdi-bell-outline" />
                        <RouterLink v-slot="{ navigate, isActive }" to="/page1" custom>
                            <v-icon-btn icon="mdi-account-outline" tag="a" @click="navigate" />
                        </RouterLink>
                    </Stack>
                </Stack>
            </header>
            <div class="flex-grow-1">
                <slot></slot>
            </div>
        </Stack>
    </Stack>
</template>

<style lang="scss">
@use "@@/styles/layouts/customerLayout.scss";
</style>

<script setup lang="ts">
const isAdmin = ref(true)

import { ref, watch } from 'vue'
import ExpandedDrawerContent from './components/ExpandedDrawerContent.vue'

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
    drawer.value = false
})

const route = useRoute()
const customerId = route.params.customerId

const menuPages = [
    {
        label: "Início",
        path: `/${customerId}/home`,
        icon: "mdi-view-dashboard",
    },
    {
        label: 'Gerenciar Inquilinos',
        path: `/${customerId}/manage-rents`,
        icon: "mdi-account-group",
    },
    {
        label: 'Pagamentos',
        path: `/${customerId}/payments`,
        icon: "mdi-cash",
    },
]

const pages =
    [
        {
            label: "Cadastro ASAAS",
            path: `/${customerId}/asaas-signup`,
        },
        ...menuPages
    ]

const currentPagePath = String(route.path)

console.log("currentPagePath", currentPagePath)


const currentPage = computed(() => {
    return pages.find(item => item.path === currentPagePath)
})

</script>