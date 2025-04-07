<template>
    <h1 class="text-h5 font-weight-medium">Primeiros passos</h1>
    <h2 class="text-body-1">
        Faça o seu cadastro e comece agora com a Imobia
    </h2>
    <form class="mt-4" @submit.prevent="handleSubmit">
        <Stack class="flex-column ga-3">
            <v-text-field hide-details="auto" variant="outlined" label="E-mail" v-model="form.email" required
                type="email" />
            <v-text-field hide-details="auto" variant="outlined" label="Senha" v-model="form.password" required />
            <v-text-field hide-details="auto" variant="outlined" label="Confirme sua senha"
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
const form = reactive({
    email: '',
    password: '',
    confirmPassword: '',
})

const handleSubmit = () => {
    console.log('Form submitted:', form)
    // You can send this to an API using useFetch or $fetch
}

</script>