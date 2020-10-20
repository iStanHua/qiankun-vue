// router/modules/template.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/template',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        meta: {
          title: '模板列表',
          auth: true,
          alive: true
        },
        component: () => import('@/views/template/list.vue')
      },
      {
        path: 'list/:type/:id',
        meta: {
          title: '模板',
          auth: true
        },
        component: () => import('@/views/template/edit.vue')
      }
    ]
  }
]