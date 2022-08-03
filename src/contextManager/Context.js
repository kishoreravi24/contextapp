import React, { Component, createContext } from 'react'

export const context = createContext();
export default class Context extends Component {
  state = {
    name: 'kishore'
  }
  fun = (data) => {
    this.setState({name: data})
  }
  render() {
    return (
      <div>
        <context.Provider value={{...this.state,fun:this.fun}}>
            {this.props.children}
        </context.Provider>
      </div>
    )
  }
}
