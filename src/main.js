// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import Routes from './routes'
import 'element-ui/lib/theme-chalk/index.css'
import storeConfig from './store'

Vue.prototype.$host = '/get'

Vue.use(Element)


Vue.prototype.$ajax = axios
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
	routes:Routes,
	mode:"history"
})
router.beforeEach((to,from,next)=>{
	
	if(to.meta.title){
		document.title=to.meta.title
		next();
	}	
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
  storeConfig
})
