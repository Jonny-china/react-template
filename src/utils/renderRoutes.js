import React from 'react'
import { Switch, Route } from 'react-router-dom'
function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route exact={route.exact}
          key={route.key || i}
          path={route.path}
          render={props => {
            // 设置页面标题
            !!route.title && (document.title = route.title)
            return route.render ? (
              route.render({ ...props, ...extraProps, route: route })
            ) : (
              <route.component {...props}
                {...extraProps}
                route={route} />
            )
          }}
          strict={route.strict} />
      ))}
    </Switch>
  ) : null
}

export default renderRoutes
