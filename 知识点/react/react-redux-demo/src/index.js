import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import {Provider,connect} from 'react-redux';

const store = createStore(counter)
const rootEl = document.getElementById('root')

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   rootEl
// )

const mapStateToProps = state => {
  console.log('mapStateToProps',state);
  return {
    value: state
  }
}

const mapDispatchToProps = state => {
  return {
    onIncrement: () => {
      store.dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement: () => {
      store.dispatch({
        type: 'DECREMENT'
      })
    }
  }
}

const App = connect(mapStateToProps,mapDispatchToProps)(Counter);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

render()
store.subscribe(render)
