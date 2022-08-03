# Context in React 
PS: written for my own purpose Refered from React doc.
## when to use context in React:
In React, data(state) is passed down to all the components via props, but for eg: there are three components linked to App root component, in App component having the state and I need to pass down to third component.
I only need state in third component and will pass it as props, but to get the state I need to pass the state to one & second component and then only will get the value in the third component.
I am not using the state in one and second, eventually it gets pass down, its uterly useless.
And it is alternate to the Redux, we can have the state in context and using provider, consumer we can get the state and modify it, and like multiple Reducer, we can also have multiple provider here.
## Api
### createContext
> import {createContext} from 'React';
>
> const contextExample = createContext();
### Provider
Every context object has provider component, which can have the prop value, one provider can be connected to many consumers.
All consumer connected to provider will re-render whenever the value prop change.
This does not compare to shouldComponentUpdate, so the consumer is updated when an ancestor components skips an update.
> const state = {name: 'contextTest'}
>
> <contextExample.Provider value={state}> </contextExample.Provider>
### contextType
To use the state value.
```
class Example extends React.Component {
    static contextType = contextExample;
    render(){
        console.log(this.context) // have the value of state
    }
}
```
### consumer
> <contextExample.Consumer>{value => console.log()}</contextExample.Consumer>
### Diff b/w consumer and contextType
>static contexType = contextExample;
contextType is introduced on React 16 and both contextType and the consumer subscribes to the provider, but the contextType
subscribes to only one context


---
Check code for demo/Examples