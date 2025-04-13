<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

</script>

<template>
    <v-container max-width="550px" class="pa-0">
        <v-card :elevation="mobile ? 0 : 1" class="pa-md-8 pa-4">
            <h1 class="text-h2 text-center">
                Cadastro concluído com sucesso!
            </h1>
            <h2 class="text-h5 text-center mt-4">A partir de agora você já pode explorar o sistema
                Imobia</h2>

            <p class="text-body-2 text-center mt-6">
                Alguns recursos permanecem limitados até
                que você crie uma conta na plataforma de pagamentos ASAAS. Esse cadastro é simples e integrado ao
                sistema.
            </p>

            <Stack class="flex-column ga-3 align-center mt-6">
                <v-btn size="large" class="text-none" variant="flat" color="primary" href="">Criar conta ASAAS</v-btn>
                <BaseLink class="text-center" href="/">Explorar sistema agora mesmo</BaseLink>
            </Stack>

        </v-card>
    </v-container>
</template>