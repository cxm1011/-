import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import {Button} from 'antd';
import createLogger from 'redux-logger';
import {Provider,connect} from 'react-redux';
import Counter from './counter/Counter';
import reducer from './counter/reducer';
const logger = createLogger();



const mapStateToProps = state => {
  return {
    value: state
  }
}

const counterStore  = createStore(reducer);

const mapDispatchToProps = state => {
  return {
    onIncrement: () => {
      counterStore.dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement: () => {
      counterStore.dispatch({
        type: 'DECREMENT'
      })
    }
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    const reducer = (previousState = 0 ,action) => {
      switch (action.type) {
        case 'LIKE': 
          return previousState + 1;
        case 'UNLIkE': 
          return previousState - 1;
        default: 
          return previousState
      }
    }
    // const store = createStore(reducer,applyMiddleware(logger));
    const store = createStore(reducer);

    const CounterApp = connect(mapStateToProps,mapDispatchToProps)(Counter);
    this.state = {
      store,
      CounterApp
    }
  }

  componentDidMount() {
    

    // const store = createStore(reducer);
    // console.log('store.getState()',store.getState());

   
    // console.log('store.getState() after dispatch like',store.getState());
  }

  handleLike = () => {
    const {store} = this.state;
    store.dispatch({
      type: 'LIKE'
    })
    console.log('store.getState() after dispatch like',store.getState());
  }

  render() {
    var isShow = false;
    const {CounterApp} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {isShow ? '':  <div>123<span>123</span></div>}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Button onClick={this.handleLike}>点赞</Button>

          <p>使用React-redux库</p>
          <Provider store={counterStore}>
            {/* <CounterApp /> */}
          </Provider>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
