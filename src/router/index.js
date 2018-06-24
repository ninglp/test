import Vue from 'vue'
import Router from 'vue-router'

import appPages from '@/views/Pages'
import appHome from '@/views/Home'
import appCurriculum from '@/views/Curriculum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: appPages,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          component: appHome
        },
        {
          path: 'curriculum',
          component: appCurriculum
        }
      ]
    }
  ]
})
