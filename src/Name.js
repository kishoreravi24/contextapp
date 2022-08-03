import React, { Component } from 'react'
import {context} from './contextManager/Context';

export default class Name extends Component {
    static contextType = context;
  render() {
    return (
      <div>
        {console.log('contextType', this.context)}
      </div>
    )
  }
}
