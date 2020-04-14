import path from 'path'

export default function () {
  this.extendRoutes((routes) => {
    routes.forEach((route) => {
      route.alias.push('/fbia' + route.path)
    })
  })
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js')
  })
}
