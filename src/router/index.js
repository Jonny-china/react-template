// const _import = file => require(`@/views/${file}`).default

const _import = require(`./_import.${process.env.NODE_ENV}`).default
console.log(process.env.NODE_ENV)

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
