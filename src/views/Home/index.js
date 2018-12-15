import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserInfo } from '@/store/actions/user'
import logo from '@/assets/images/logo.svg'
import './App.scss'

const mapStateToProps = state => ({
  userInfo: state.userInfo
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUserInfo }, dispatch)
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      add: 1
    }
  }
  test = async e => {
    e.preventDefault()
    console.log(this.props)
    const res = await this.props.getUserInfo({ id: 26 })
    console.log('res', res)
    console.log(this.props.userInfo)
    await this.setState({
      add: this.state.add + 1
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo"
            className="App-logo"
            src={logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            onClick={this.test}
            rel="noopener noreferrer"
            target="_blank">
            Learn React
          </a>
          <Link className="App-link"
            to="/about">
            about1
          </Link>
        </header>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
