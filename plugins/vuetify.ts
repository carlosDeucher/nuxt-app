// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: "#E94E24", // #E94E24
                        secondary: "#1E3260", // #1E3260
                    }
                },
            },
        },
    })
    app.vueApp.use(vuetify)
})