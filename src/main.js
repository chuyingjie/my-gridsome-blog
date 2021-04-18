// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import './assets/css/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue';
import util from './utils/util'

Vue.use(ElementUI)
Vue.prototype.$util = util

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
