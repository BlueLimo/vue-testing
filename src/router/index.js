
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Welcome from 'components/signin'
import signup from 'components/signup'

Vue.use(VueResource)
Vue.use(Router)

//setting up routing and matching routes to components

export default new Router(
{
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
