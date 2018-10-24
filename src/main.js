// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vue from 'vue'
import App from './App'
import router from './router'
import store from '@/states'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/http/index'
vue.config.productionTip = false;
vue.use(elementUI);
/* eslint-disable no-new */
store.dispatch("getCorpId").then(() => {
  new vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
    created() {
    }
  });
}).catch(err => console.log(err));


