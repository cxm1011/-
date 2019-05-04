
1. Redux 基本使用
``` jsx
componentDidMount() {
    // dispatch(action) subscribe(listener) getState  replaceReducer(nextReducer)
    const store = createStore(reducer, preloadedState, enhancer);

    const action1 = {
      type: 'READ_REDUX_BOOK',
      data: {
        book: '深入浅出1'
      }
    }

    // 携带的信息由参数决定
    // !!! Action 的最佳实践
    const learnReduxActionFactory = book => {
      'READ_REDUX_BOOK',
      book
    }

    // dispatch派发action
    store.dispatch(action1);
    store.dispatch(learnReduxActionFactory('深入浅出1'));

    // reducer函数更新数据
    const updateStateTree = function (previousState = {},action) {

    }

    const updateStateTree = function (previousState = {},action) {
      switch(action.type) {
        case 'case1': return newState1;
        case 'case2': return newState2;
        default: return previousState;
      }
    }

    // 当业务复杂，需要几个或者几十个甚至更多的action来描述不同的变化时，reducer函数也会变得庞大无比
    // 因此需要拆分Reducer
    let finalReducer = combineReducers({reducers});
    // 1.页面数据状态中存在三种数据状态,data1、data2、data3，它们相互独立而不关联
    state = {
      data1 : {

      },
      data2: {

      },
      data3: {

      }
    }
    // 2.将三种数据状态拆分成三个小的reducer函数进行处理
    const reducer1 = function(preloadedState = {},action){
      // 根据action和state.data1产生新的state.data1
      return state.data1;
    }
    const reducer2 = function(preloadedState = {},action){
      // 根据action和state.data2产生新的state.data2
      return state.data2;
    }
    const reducer3 = function(preloadedState = {},action){
      // 根据action和state.data3产生新的state.data3
      return state.data3;
    }

    // 3.利用combineReducer将三个子reducer函数合并并返回完整归一的finalReducer
    let finalReducer = combineReducers({
      data1: reducer1,
      data2: reducer2,
      data3: reducer3
    });

    // !!! reducer命名的最佳实践。将reducer命名为其处理的页面状态数据树中的键值
    // 好处: 命名规范，同时在多人开发时利于维护。也可以使用ES6中Object 新特性对combineReducers进行简写
    // 如上面的reducer函数可以命名为
    const data1 = function(preloadedState = {},action){
      // 根据action和state.data1产生新的state.data1
      return state.data1;
    }
    const data2 = function(preloadedState = {},action){
      // 根据action和state.data2产生新的state.data2
      return state.data2;
    }
    const data3 = function(preloadedState = {},action){
      // 根据action和state.data3产生新的state.data3
      return state.data3;
    }

    const finalReducer = combineReducers({
      data1,
      data2,
      data3
    })
    ```