// /micro/apps.js

export default (props = {}) => {
  return [
    {
      name: 'web',
      entry: 'http://localhost:9001',
      container: '#app-container',
      activeRule: '/web',
      props: props
    },
    {
      name: 'admin',
      entry: 'http://localhost:9002',
      container: '#app-container',
      activeRule: '/admin',
      props: props
    }
  ]
}
