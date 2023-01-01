/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import 'vue-material-design-icons/styles.css'
import '@mdi/font/css/materialdesignicons.css'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import router from './router'

const app = createApp(App).use(router)

registerPlugins(app)

app
  .use(vuetify)
  .mount('#app')
