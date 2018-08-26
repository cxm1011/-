#生命周期阶段
- 首次渲染
constructor
componentWillMount
render
componentDidMount

- props更新
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

- state更新
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

- 卸载
willUnmount

#总结
- 当props或者state被修改时，就会引发组件的更新过程
- 只有render和shouldComponentUpdate需要返回结果
- 不能在 shouldComponentUpdate 和 componentWillUpdate中调用 setState，会导致循环调用。


