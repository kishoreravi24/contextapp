import React, { Component } from 'react'
import {context} from './contextManager/Context';

class ConsumerTest extends Component {
  render() {
    return (
      <div>
        <context.Consumer>
            {value => (
                console.log('Consumer',value)
            )}
        </context.Consumer>
      </div>
    )
  }
}

export default ConsumerTest;