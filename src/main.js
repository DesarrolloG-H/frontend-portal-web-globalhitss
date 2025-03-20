import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// Importar la librería de íconos
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Agregar íconos a la librería
library.add(faHome, faChartBar, faFileAlt)

// import router from './router'
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(router)
app.mount('#app')
