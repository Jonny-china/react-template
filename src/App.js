import React, { Suspense, PureComponent } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import routes from './router'
import renderRoutes from '@/utils/renderRoutes'
import Loading from './components/Loading'

const mapStateToProps = state => ({
  showLoading: state.showLoading
})

class App extends PureComponent {
  render() {
    return (
      <>
        {this.props.showLoading && <Loading />}
        <Router>
          <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
        </Router>
      </>
    )
  }
}

export default connect(mapStateToProps)(App)
