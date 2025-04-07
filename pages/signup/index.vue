<template>
    <v-container max-width="900px">
        <Stack class="ga-10 align-center mt-md-16">
            <main class="mt-4">
                <AuthStep v-if="currentStep === 'auth'"></AuthStep>
                <UserDataStep v-else-if="currentStep === 'userData'"></UserDataStep>
                <SuccessStep v-else-if="currentStep === 'success'"></SuccessStep>
            </main>
            <Box v-if="!isMobile" class="rounded-xl" sx="overflow: hidden">
                <v-img src="/signup-hero.webp" :width="500" :height="500" position="right" cover alt="Logo">
                </v-img>
            </Box>
        </Stack>
    </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { ref, watch } from 'vue';
import AuthStep from './pages/AuthStep.vue';
import UserDataStep from './pages/UserDataStep.vue';
import SuccessStep from './pages/SuccessStep.vue';
const { smAndDown } = useDisplay();
const isMobile = ref(true);

watch(smAndDown, (val) => {
    isMobile.value = val;
}, { immediate: true });

const currentStep = ref("userData");
</script>

<!--Essa tag style foi uma gambiarra pois ainda não encontrei uma maneira
de trazer responsividade pra propriedade max-width sem ter problemas com o SSR-->
<style>
main {
    max-width: 100%;
    width: 100%;

    @media (min-width: 600px) {
        max-width: 400px;
    }
}
</style>
