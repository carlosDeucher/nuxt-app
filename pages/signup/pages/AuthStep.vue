<template>
    <h1 class="text-h3">Primeiros passos</h1>
    <h2 class="text-body-1 mt-1">
        Faça o seu cadastro e comece agora com a Imobia
    </h2>
    <form class="mt-4" @submit.prevent="handleSubmit">
        <Stack class="flex-column ga-3">
            <v-text-field hide-details="auto" variant="outlined" label="E-mail" v-model="form.email" required
                type="email" />
            <v-text-field :error-messages="formErrors.password || undefined" hide-details="auto" variant="outlined"
                label="Senha" :append-inner-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isVisible ? 'text' : 'password'" @click:append-inner="isVisible = !isVisible"
                v-model="form.password" required />
            <v-text-field :error-messages="formErrors.confirmPassword || undefined" hide-details="auto"
                variant="outlined" label="Confirme sua senha" :type="isVisible ? 'text' : 'password'"
                @click:append-inner="isVisible = !isVisible" :append-inner-icon="isVisible ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="form.confirmPassword" required />
            <v-btn type="submit" size="large" color="primary" variant="flat" class="text-none">Enviar
            </v-btn>
            <Stack class="justify-center">
                <span class="text-body-2">
                    Já tem uma conta? <BaseLink href="/login">Fazer login</BaseLink>
                </span>
            </Stack>
        </Stack>
    </form>
</template>

<script setup lang="ts">
import type { ISaveAuthDataParams } from '~/@types/ISaveAuthDataParams';
const isVisible = ref(false)
const form = reactive({
    email: '',
    password: '',
    confirmPassword: '',
})

const formErrors = reactive({
    email: '',
    password: '',
    confirmPassword: '',
})

const emit = defineEmits<{
    "save-auth-data": [ISaveAuthDataParams]
}>();

const handleSubmit = () => {
    if (form.password.length < 8) {
        formErrors.password = 'A senha deve conter no mínimo 8 caracteres';
        return;
    }

    if (form.password !== form.confirmPassword) {
        formErrors.confirmPassword = 'As senhas não coincidem';
        return;
    }

    emit("save-auth-data", { email: form.email, password: form.password })
}

</script>