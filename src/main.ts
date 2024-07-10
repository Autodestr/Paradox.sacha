import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import '@/style.css'
import 'uno.css'
import router from '@/router'
import BlockUI from 'primevue/blockui'
import Button from 'primevue/button'
import Select from 'primevue/select'
import FloatLabel from 'primevue/floatlabel'
import StyleClass from 'primevue/styleclass'
import Aura from '@primevue/themes/aura'
import InputText from 'primevue/inputtext'
import ProgressBar from 'primevue/progressbar'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar';
import Ripple from "primevue/ripple";

const meta = document.createElement('meta')

document.head.appendChild(meta)

export const app = createApp(App)
  .use(router)
  .use(ToastService)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .directive('styleclass', StyleClass)
  .component('ProgressBar', ProgressBar)
  .component('InputText', InputText)
  .component('Button', Button)
  .component('BlockUI', BlockUI)
  .component('Dialog', Dialog)
  .component('Select', Select)
  .component('FloatLabel', FloatLabel)
    .component('MenuBar', Menubar)
    .directive('ripple', Ripple)
  .mount('#app')
