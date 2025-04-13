<template>
    <title>Imobia</title>

    <Stack class="flex-column fill-height">
        <header>
            <div class="border-b border-gray-200">
                <v-container max-width="1200">
                    <div class="pr-2 pl-2">
                        <Stack sx="height: 50px; width: fit-content">
                            <v-img src="/minimal-logo.png" :width="50" :height="50" alt="Logo">
                            </v-img>
                        </Stack>
                    </div>
                </v-container>
            </div>
        </header>
        <div class="flex-grow-1">
            <slot></slot>
        </div>
    </Stack>
</template>