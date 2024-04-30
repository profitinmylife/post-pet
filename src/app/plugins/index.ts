import vuetify from './vuetify'
import router from '../router'
import { createPinia } from 'pinia'

import type { App } from 'vue'
const pinia = createPinia()

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
