// router/modules/common.js

import Layout from '@/components/layout/index.vue'

export default [
  {
    path: '/login',
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          title: '登录'
        },
        component: () => import('@/views/login.vue')
      }
    ]
  }
]