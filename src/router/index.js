const _import = file => require(`@/views/${file}`).default

const routes = [
  {
    path: '/',
    title: 'HOME',
    exact: true,
    component: _import('Home')
  },
  {
    path: '/about',
    title: 'About',
    exact: true,
    component: _import('About')
  }
]

export default routes
