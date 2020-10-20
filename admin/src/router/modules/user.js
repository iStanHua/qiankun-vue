// router/modules/user.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/user',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        meta: {
          title: '用户列表',
          auth: true,
          alive: true
        },
        component: () => import('@/views/user/list.vue')
      },
      {
        path: 'list/:type/:id',
        meta: {
          title: '用户',
          auth: true
        },
        component: () => import('@/views/user/edit.vue')
      }
    ]
  }
]