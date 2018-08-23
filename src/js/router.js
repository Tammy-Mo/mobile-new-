import Vue from 'vue'
import Router from 'vue-router'
import news from '../components/detail/news.vue'
import hot from '../components/detail/hot.vue'
import comment from '../components/detail/comment.vue'
import person from '../components/detail/person.vue'
import nav from '../components/together/nav.vue'
import finance from '../components/detail/finance.vue'
import recreation from '../components/detail/recreation.vue'
import fasion from '../components/detail/fasion.vue'
import sport from '../components/detail/sport.vue'
import health from '../components/detail/health.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hot',
      component: hot
    },
    {
      path: '/comment',
      component: comment
    },
    {
      path: '/person',
      component: person
    },
    {
      path: '/nav',
      component: nav,
      children: [
              {
                path: '/news',
                component: news
              },
              {
                path: '/finance',
                component: finance
              },
              {
                path: '/recreation',
                component: recreation
              },
              {
                path: '/fasion',
                component: fasion
              },
              {
                path: '/sport',
                component: sport
              },
              {
                path: '/health',
                component: health
              }
      ]
    },
    {
      path: '*',
      redirect: '/news'
    }
  ]
})