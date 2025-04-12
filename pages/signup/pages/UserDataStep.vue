<template>
    <h1 class="text-h5 font-weight-medium">Quase lá!</h1>
    <h2 class="text-body-1">
        Informe os dados para finalizar o cadastro
    </h2>
    <form class="mt-4" @submit.prevent="handleSubmit">
        <Stack class="flex-column ga-3">
            <v-text-field hide-details="auto" variant="outlined" label="CPF/CNPJ" v-model="form.cpfCnpj" required
                @update:modelValue="onChangeCpfCnpj" />
            <v-text-field hide-details="auto" variant="outlined" label="Nome completo" v-model="form.fullName"
                required />
            <v-expand-transition>
                <v-text-field v-if="isPessoaJuridica" hide-details="auto" variant="outlined" label="Razão Social"
                    v-model="form.companyName" required />
            </v-expand-transition>
            <v-btn :loading="isLoading" type="submit" size="large" color="primary" variant="flat"
                class="text-none">Finalizar Cadastro
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
import masks from '~/shared/utils/masks'
import type { createCompanyParams } from '../index.vue';

const isLoading = ref(false)

const form = reactive({
    cpfCnpj: '',
    companyName: '',
    fullName: '',
})

const isPessoaJuridica = computed(() => {
    const parsedValue = form.cpfCnpj.replace(/\D/g, ""); // remove tudo q nao é digito

    return parsedValue.length === 14
})

const { createCompany } = defineProps<{
    createCompany: (params: createCompanyParams) => Promise<void>
}>()

const handleSubmit = async () => {
    isLoading.value = true

    await createCompany({
        cpfCnpj: form.cpfCnpj,
        companyName: form.companyName,
        fullName: form.fullName
    })

    isLoading.value = false
}

const onChangeCpfCnpj = (value: string) => {
    form.cpfCnpj = masks.cpfCnpj(value)
}

</script>