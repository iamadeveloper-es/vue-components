import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../pages/Home.vue'
import ComponentsView from '@/pages/ComponentsView.vue'
import AppAccordionDemo from '@/components/ui/accordion/demo/AppAccordionDemo.vue'
import AppButtonDemo from '@/components/ui/button/demo/AppButtonDemo.vue'
import AppInputFieldDemo from '@/components/ui/input-field/demo/AppInputFieldDemo.vue'
import AppSelectFieldDemo from '@/components/ui/select-field/demo/AppSelectFieldDemo.vue'
import AppTableDemo from '@/components/ui/table/demo/AppTableDemo.vue'
import AppModalDemo from '@/components/ui/modal/demo/AppModalDemo.vue'

Vue.use(VueRouter)

export const routes = [
    {
      name: 'ui',
      path: '/ui',
      component: ComponentsView,
      children: [
        {
          name: 'AppAccordion',
          path: '/accordion-demo',
          component: AppAccordionDemo
        },
        {
          name: 'AppButton',
          path: '/button-demo',
          component: AppButtonDemo
        },
        {
          name: 'AppInputField',
          path: '/input-field-demo',
          component: AppInputFieldDemo
        },
        {
          name: 'AppSelectField',
          path: '/select-field-demo',
          component: AppSelectFieldDemo
        },
        {
          name: 'AppTable',
          path: '/table-demo',
          component: AppTableDemo
        },
        {
          name: 'AppModal',
          path: '/modal-demo',
          component: AppModalDemo
        }
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
