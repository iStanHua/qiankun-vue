
export default [
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '../../views/post/list.vue')
  },
  {
    path: '/post/edit',
    name: 'EditPost',
    component: () => import(/* webpackChunkName: "post" */ '../../views/post/edit.vue')
  }
]