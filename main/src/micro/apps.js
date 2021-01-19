const apps = [
  {
    name: 'web',
    entry: 'http://localhost:9001',
    container: '#app-container',
    activeRule: '/web'
  },
  {
    name: 'admin',
    entry: 'http://localhost:9002',
    container: '#app-container',
    activeRule: '/admin'
  }
]

export default apps
