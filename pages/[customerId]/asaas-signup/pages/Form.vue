<script setup lang="ts">
import type { ISubmitAsaasForm } from '~/@types/ISubmitAsaasForm';
import masks from '~/shared/utils/masks';

const fields = {
    phoneNumber: '',
    birthDate: '',
    companyType: '',
    incomeValue: '',
    address: '',
    addressNumber: '',
    complement: '',
    province: '',
    postalCode: '',
}
const emit = defineEmits<{
    "submit-form": [ISubmitAsaasForm]
}>();

function handleSubmit() {
    emit("submit-form", form)
}

const form = reactive(fields)


const onChangeBirthDate = (value: string) => {
    form.birthDate = masks.date(value)
}

</script>

<template>
    <h2 class="text-h4">
        Iniciar cadastro ASAAS
    </h2>
    <p class="text-body-1 mt-1">
        Informe os dados para iniciar o cadastro na plataforma digital ASAAS.
    </p>
    <v-card :elevation="1" class="pa-md-8 pa-4 mt-2">
        <form class="mt-3">
            <Stack class="flex-column ga-3">
                <Stack class="flex-md-row ga-3" style="flex-direction: column;">
                    <v-text-field hide-details="auto" variant="outlined" label="Número de celular"
                        v-model="form.phoneNumber" required />
                    <v-text-field hide-details="auto" variant="outlined" label="Data de nascimento"
                        v-model="form.birthDate" @update:modelValue="onChangeBirthDate" required />
                    <v-select hide-details="auto" variant="outlined" label="Tipo de empresa" v-model="form.companyType"
                        :items="[{ title: 'MEI', value: 'MEI' }, { title: 'LTDA', value: 'LIMITED' }, { title: 'INDIVIDUAL', value: 'INDIVIDUAL' }, { title: 'ASSOCIAÇÃO', value: 'ASSOCIATION' }]"
                        required />
                    <v-text-field hide-details="auto" variant="outlined" label="Renda mensal"
                        v-model="form.incomeValue" type="number" required />
                </Stack>
                <Stack class="flex-md-row ga-3" style="flex-direction: column;">
                    <v-text-field hide-details="auto" variant="outlined" label="Endereço" v-model="form.address"
                        required>
                    </v-text-field>
                    <v-text-field hide-details="auto" variant="outlined" label="Complemento" v-model="form.complement"
                        required />
                </Stack>
                <Stack class="flex-md-row ga-3" style="flex-direction: column;">
                    <v-text-field hide-details="auto" variant="outlined" label="Número" v-model="form.addressNumber"
                        required />
                    <v-select hide-details="auto" variant="outlined" label="Estado" v-model="form.province" :items="[
                        { title: 'Acre', value: 'AC' },
                        { title: 'Alagoas', value: 'AL' },
                        { title: 'Amapá', value: 'AP' },
                        { title: 'Amazonas', value: 'AM' },
                        { title: 'Bahia', value: 'BA' },
                        { title: 'Ceará', value: 'CE' },
                        { title: 'Distrito Federal', value: 'DF' },
                        { title: 'Espírito Santo', value: 'ES' },
                        { title: 'Goiás', value: 'GO' },
                        { title: 'Maranhão', value: 'MA' },
                        { title: 'Mato Grosso', value: 'MT' },
                        { title: 'Mato Grosso do Sul', value: 'MS' },
                        { title: 'Minas Gerais', value: 'MG' },
                        { title: 'Pará', value: 'PA' },
                        { title: 'Paraíba', value: 'PB' },
                        { title: 'Paraná', value: 'PR' },
                        { title: 'Pernambuco', value: 'PE' },
                        { title: 'Piauí', value: 'PI' },
                        { title: 'Rio de Janeiro', value: 'RJ' },
                        { title: 'Rio Grande do Norte', value: 'RN' },
                        { title: 'Rio Grande do Sul', value: 'RS' },
                        { title: 'Rondônia', value: 'RO' },
                        { title: 'Roraima', value: 'RR' },
                        { title: 'Santa Catarina', value: 'SC' },
                        { title: 'São Paulo', value: 'SP' },
                        { title: 'Sergipe', value: 'SE' },
                        { title: 'Tocantins', value: 'TO' }
                    ]" item-title="title" item-value="value" required />
                    <v-text-field hide-details="auto" variant="outlined" label="Código postal" v-model="form.postalCode"
                        required />
                </Stack>
                <Stack style="align-items: stretch;" class="flex-column align-md-end w-100 mt-3">
                    <v-btn type="submit" size="large" color="primary" variant="flat" class="text-none">Enviar
                    </v-btn>
                </Stack>

            </Stack>
        </form>
    </v-card>
</template>