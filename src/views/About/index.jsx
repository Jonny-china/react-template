import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import HelloWorld from '@/components/HelloWorld'

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <Button inline
          size="small"
          type="ghost">
          水电费是否收费
        </Button>
        <HelloWorld name={process.env.REACT_APP_BASE_API} />
      </div>
    )
  }
}

export default About
