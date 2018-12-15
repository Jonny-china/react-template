import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect
} from 'react-router-dom'

import routes from './router'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route component={({ match }) => {
                console.log(match)
                // 重定向
                // if (route.path === '/about') return <Redirect to="/login" />
                document.title = route.title
                return <route.component />
              }}
              exact={!!route.exact}
              key={index}
              path={route.path} />
            ))}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
