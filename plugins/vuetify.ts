// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { VIconBtn } from 'vuetify/labs/VIconBtn'

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: "#E94E24", // #E94E24
        secondary: "#1E3260", // #1E3260
        "secondary-light": "#445377", // #445377,
        "secondary-dark": "#142650", // #1f2f51
        gray: "#9e9e9e", // #9e9e9e
    },
     
}


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: lightTheme
            },
        },
        display: {
            mobileBreakpoint: 'sm',
        },
        defaults: {
            VCard: {
                elevation: 2
            },
        },
        components: {
            VIconBtn,
        },
    })
    app.vueApp.use(vuetify)
})