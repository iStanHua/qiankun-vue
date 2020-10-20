// router/modules/score.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/score',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        meta: {
          title: '积分记录列表',
          auth: true,
          alive: true
        },
        component: () => import('@/views/score/list.vue')
      },
      {
        path: 'list/:type/:id',
        meta: {
          title: '积分记录',
          auth: true
        },
        component: () => import('@/views/score/edit.vue')
      }
    ]
  }
]