import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import mine from "../components/mine"
import videowatch from "../components/videowatch";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/mine',
      name:'mine',
      component:mine
    },
    {
      path:'/videowatch',
      name:'videowatch',
      component:videowatch
    }
  ]
})
