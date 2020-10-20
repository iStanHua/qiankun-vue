// router/modules/history.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/history',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        meta: {
          title: '登录记录列表',
          auth: true,
          alive: true
        },
        component: () => import('@/views/history/list.vue')
      },
      {
        path: 'list/:type/:id',
        meta: {
          title: '登录记录',
          auth: true
        },
        component: () => import('@/views/history/edit.vue')
      }
    ]
  }
]