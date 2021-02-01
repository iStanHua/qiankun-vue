import { fetch } from 'common/src/axios'

export const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const PostList = () => fetch({ url: `${BASE_URL}/posts`, type: 'get' })

export const PostDetail = (id) => fetch({ url: `${BASE_URL}/posts/${id}`, type: 'get' })

export const EditPost = (data) => {
  let id = data.id
  if (id) {
    delete data.id
    return fetch({ url: `${BASE_URL}/posts/${id}`, type: 'put', data })
  }
  return fetch({ url: `${BASE_URL}/posts`, type: 'post', data })
}

export const DeletePost = (id) => fetch({ url: `${BASE_URL}/posts/${id}`, type: 'delete' })

