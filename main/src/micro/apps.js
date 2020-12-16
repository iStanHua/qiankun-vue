const apps = [
  {
    name: 'web',
    entry: '//localhost:9001',
    container: '#sub-app',
    activeRule: '/web'
  },
  {
    name: 'admin',
    entry: '//localhost:9002',
    container: '#sub-app',
    activeRule: '/admin'
  }
]

export default apps
