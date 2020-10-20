// router/modules/account.js

import AdminLayout from '@/components/layout/admin.vue'

export default [
  {
    path: '/account',
    component: AdminLayout,
    children: [
      {
        path: 'info',
        meta: {
          title: '个人信息',
          auth: true,
          active: 'account'
        },
        component: () => import('@/views/account/info.vue')
      }
    ]
  }
]