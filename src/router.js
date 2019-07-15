import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HomeOne from '@/views/Home/HomeOne'
import Global from '@/views/Home/Global'
import Mbaby from '@/views/Home/Mbaby'
import Luxu from '@/views/Home/Luxu'
import Po from '@/views/Home/Po'

import Yiqituan from '@/views/Yiqituan.vue'
import List from '@/views/Yiqituan/List'

import Cart from '@/views/Cart.vue'

import My from '@/views/My.vue'


import Detail from '@/views/Detail.vue'
import Detailtu from '@/views/Detail/Detailtu'
import Detailping from '@/views/Detail/Detailping'
import Detailcan from '@/views/Detail/Detailcan'

import Detailtuan from '@/views/Detailtuan.vue'
import Detailtuantu from '@/views/Detailtuan/Detailtuantu'
import Detailtuanping from '@/views/Detailtuan/Detailtuanping'
import Detailtuancan from '@/views/Detailtuan/Detailtuancan'
Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'homeone',
          component: HomeOne
        },
        {
          path: 'global',
          component: Global
        },
        {
          path: 'mbaby',
          component: Mbaby
        },
        {
          path: 'luxu',
          component: Luxu
        },
        {
          path: 'po',
          component: Po
        },
        {
          path: '',
          redirect: '/home/homeone'
        }
      ]
    },
    {
      path: '/yiqituan',
      component: Yiqituan,
      children: [
        {
          path: 'list',
          component: List
        },
        {
          path: '',
          redirect: '/yiqituan/list'
        }
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/detail/:item_id',
      component: Detail,
      children: [
        {
          path: 'detailtu',
          component: Detailtu
        },
        {
          path: 'detailcan',
          component: Detailcan
        },
        {
          path: 'detailping',
          component: Detailping
        },
        {
          path: '',
          redirect: '/detail/:item_id/detailtu'
        }

      ]
    },
    {
      path: '/detailtuan/:item_id',
      component: Detailtuan,
      children: [
        {
          path: 'detailtuantu',
          component: Detailtuantu
        },
        {
          path: 'detailtuancan',
          component: Detailtuancan
        },
        {
          path: 'detailtuanping',
          component: Detailtuanping
        },
        {
          path: '',
          redirect: '/detailtuan/:item_id/detailtuanping'
        }

      ]
    },
    {
      path: '*',
      redirect: '/home'
    }

  ]
})
