import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import {library} from "@fortawesome/fontawesome-svg-core"
import "animate.css/animate.css"

import "bootstrap/dist/css/bootstrap.css"

import {
    faShoppingCart,
    faDollarSign
} from "@fortawesome/free-solid-svg-icons"

library.add(faShoppingCart,faDollarSign)

createApp(App).mount('#app')
