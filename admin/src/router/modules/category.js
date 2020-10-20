// router/modules/category.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/category',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        meta: {
          title: '分类列表',
          auth: true,
          alive: true
        },
        component: () => import('@/views/category/list.vue')
      },
      {
        path: 'list/:type/:id',
        meta: {
          title: '分类',
          auth: true
        },
        component: () => import('@/views/category/edit.vue')
      }
    ]
  }
]