import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import './registerServiceWorker'

createApp(App).use(bootstrap).mount('#app')

// if ('registerServiceWorker' in navigator) {
//   window.addEventListener('load', function(){
//     this.navigator.serviceWorker.register(sw)
//   })
// }
