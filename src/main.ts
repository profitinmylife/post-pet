import { registerPlugins } from './app/plugins'
import App from './app/App.vue'

import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
