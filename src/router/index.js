import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../pages/Home.vue'
import ComponentsView from '@/pages/ComponentsView.vue'
import AppAccordionDemo from '@/components/ui/accordion/demo/AppAccordionDemo.vue'
import AppButtonDemo from '@/components/ui/button/demo/AppButtonDemo.vue'
import AppInputFieldDemo from '@/components/ui/input-field/demo/AppInputFieldDemo.vue'
import AppSelectFieldDemo from '@/components/ui/select-field/demo/AppSelectFieldDemo.vue'
import AppTableDemo from '@/components/ui/table/demo/AppTableDemo.vue'

Vue.use(VueRouter)

export const routes = [
    {
      name: 'ui',
      path: '/ui',
      component: ComponentsView,
      children: [
        {
          name: 'AppAccordionDemo',
          path: '/accordion-demo',
          component: AppAccordionDemo
        },
        {
          name: 'AppButtonDemo',
          path: '/button-demo',
          component: AppButtonDemo
        },
        {
          name: 'AppInputFieldDemo',
          path: '/input-field-demo',
          component: AppInputFieldDemo
        },
        {
          name: 'AppSelectFieldDemo',
          path: '/select-field-demo',
          component: AppSelectFieldDemo
        },
        {
          name: 'AppTableDemo',
          path: '/table-demo',
          component: AppTableDemo
        },
      ]
    },
    {
      name: 'common',
      path: '/common',
      component: ComponentsView,
    },
    {
      name: 'layout',
      path: '/layout',
      component: ComponentsView,
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
