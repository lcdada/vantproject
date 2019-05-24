import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Cart from '@/pages/Cart'
import  List  from '@/pages/List';
import Select from '@/pages/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
