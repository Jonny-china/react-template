import React, {PureComponent} from 'react'

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: `Hello World`
    }
  }

  render() {
    return (
      <h1>{this.state.text} {this.props.name}</h1>
    )
  }
}

export default HelloWorld