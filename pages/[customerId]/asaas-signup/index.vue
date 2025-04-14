<template>
    <v-container max-width="1200">
        <Box class="mt-5">
            <Form v-if="currentStep === 'form'" @submit-form="createAsaasAccount" />
            <Success v-else-if="currentStep === 'success'" />
        </Box>
    </v-container>
    <v-snackbar :color="snackbarOptions.color" v-model="snackbarOptions.isActive" :timeout="2000">
        {{ snackbarOptions.text }}
    </v-snackbar>
</template>

<script setup lang="ts">
import type { ISubmitAsaasForm } from '~/@types/ISubmitAsaasForm';
import Form from './pages/Form.vue';
import Success from './pages/Success.vue';
import clientAPI from '~/shared/lib/AxiosConfig';

const snackbarOptions = ref({
    isActive: false,
    text: '',
    color: ''
});

definePageMeta({
    layout: 'customer'
})

const currentStep = ref('form')

const createAsaasAccount = async (form: ISubmitAsaasForm) => {
    const { phoneNumber,
        birthDate,
        companyType,
        incomeValue,
        address,
        addressNumber,
        complement,
        province,
        postalCode, } = form

    const incomeValueParsed = Number(incomeValue.replace(".", "").replace(",", "."))
    try {
        await clientAPI.post("/company/create-payment-account/", {
            mobilePhone: phoneNumber,
            birthDate: birthDate.split("/").join("-"),
            companyType,
            incomeValue: incomeValueParsed,
            address,
            addressNumber: Number(addressNumber),
            complement,
            province,
            postalCode
        }, {

        })

        currentStep.value = "success"
    } catch {
        snackbarOptions.value = {
            isActive: true,
            text: 'Falha ao criar conta, tente novamente mais tarde.',
            color: 'error',
        }
    }
}
</script>