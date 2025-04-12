<template>
    <v-container max-width="900px">
        <Box class="mt-md-16">
            <!-- ETAPAS COM FORMULÁRIO -->
            <Stack v-if="currentStep !== 'success'" class="ga-10 align-center justify-center mt-4">
                <Box>
                    <AuthStep v-if="currentStep === 'auth'" @save-auth-data="saveAuthData"></AuthStep>
                    <UserDataStep v-else-if="currentStep === 'userData'" :createCompany="createCompany">
                    </UserDataStep>
                </Box>
                <Box v-if="!isMobile" class="rounded-xl" sx="overflow: hidden">
                    <v-img src="/signup-hero.webp" :width="500" :height="500" position="right" cover alt="Logo">
                    </v-img>
                </Box>
            </Stack>

            <!-- ETAPA DE SUCESSO -->
            <SuccessStep v-if="currentStep === 'success'"></SuccessStep>
        </Box>
    </v-container>
    <v-snackbar :color="snackbarOptions.color" v-model="snackbarOptions.isActive" :timeout="2000">
        {{ snackbarOptions.text }}
    </v-snackbar>
</template>

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

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { ref, watch } from 'vue';
import AuthStep from './pages/AuthStep.vue';
import UserDataStep from './pages/UserDataStep.vue';
import SuccessStep from './pages/SuccessStep.vue';
import clientAPI from '~/shared/lib/AxiosConfig';

const currentStep = ref("auth");
const snackbarOptions = ref({
    isActive: false,
    text: '',
    color: ''
});

const authData = ref({
    email: '',
    password: '',
})

export type saveAuthDataParams = {
    email: string;
    password: string;
}
const saveAuthData = ({ email, password }: saveAuthDataParams) => {
    authData.value = {
        email, password
    }

    currentStep.value = 'userData';
}

export type createCompanyParams = {
    fullName?: string;
    companyName?: string;
    cpfCnpj: string;
}

const createCompany = async (params: createCompanyParams) => {
    console.log('Form submitted:', params)

    const { email, password } = authData.value
    const { fullName, companyName, cpfCnpj } = params

    try {
        await clientAPI.post("/company", {
            email,
            password,
            fullName,
            companyName,
            cpfCnpj,
        })
    } catch {
        snackbarOptions.value = {
            isActive: true,
            text: 'Falha ao criar conta, tente novamente mais tarde.',
            color: 'error',
        }
    }
}
const { smAndDown } = useDisplay();
const isMobile = ref(true);

watch(smAndDown, (val) => {
    isMobile.value = val;
}, { immediate: true });
</script>
