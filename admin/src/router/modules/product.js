// router/modules/product.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/product',
    component: AdminLayout,
    children: [
      {
        path: 'list',
        meta: {
          title: '模板列表',
          auth: true,
          alive: true
        },
        component: () => import('@/views/product/list.vue')
      },
      {
        path: 'list/:type/:id',
        meta: {
          title: '模板',
          auth: true
        },
        component: () => import('@/views/product/edit.vue')
      }
    ]
  }
]