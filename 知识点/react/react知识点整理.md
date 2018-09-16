#生命周期阶段
- 首次渲染(只调用一次)
constructor   1)初始化state  2)绑定成员函数的this环境
componentWillMount  将要装载时候调用，componentWillMount中做的事都可以在constructor中去做。存在的目的主要是为了和                           componentDidMount对称                         
render
componentDidMount  组件挂载后调用,可以在该函数中进行请求
要等到所有组件的render()函数调用完成才调用各个组件的componentDidMount函数。因为render函数本省并不往
DOM树上渲染或者装载内容，它只是返回一个JSX表示的对象，然后由React库来根据返回的对象决定如何渲染。而React库肯定是要将所有组件
返回的结果综合起来，才能知道该如何产生对应的DOM修改。

- props更新
componentWillReceiveProps 当父组件的render函数被调用，render函数中的子组件就会经历更新过程。获取这一次渲染传入的props值
shouldComponentUpdate  决定一个组件需不需要渲染
componentWillUpdate
render
componentDidUpdate

- state更新
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

- 卸载
willUnmount  做一些清理性工作

#总结
- 当props或者state被修改时，就会引发组件的更新过程
- 只有render和shouldComponentUpdate需要返回结果
- 不能在 shouldComponentUpdate 和 componentWillUpdate中调用 setState，会导致循环调用。



#路由
- 每个URL包含域名部分和路径部分，决定一个URL显示什么内容只有路径部分，和域名和端口号没有关系，根据路径找到对应应用内容的过程，就是路由。
- React-router原理分析
地址：https://github.com/youngwind/blog/issues/109
url 上的 hash 本意是用来作锚点的，方便用户在一个很长的文档里进行上下的导航，用来做 SPA 的路由控制并非它的本意。然而，hash 满足这么一种特性：改变 url 的同时，不刷新页面，再加上浏览器也提供 onhashchange 这样的事件监听，因此，hash 能用来做路由控制。
虽然 hash 解决了 SPA 路由控制的问题，但是它又引入了新的问题 → url 上会有一个 # 号，很不美观
解决方案：抛弃 hash，使用 history。
history api
history.go(-1);       // 后退一页
history.go(2);        // 前进两页
history.forward();     // 前进一页
history.back();      // 后退一页
在 HTML5 规范中，history 新增了以下几个 API
history.pushState();         // 添加新的状态到历史状态栈
history.replaceState();     // 用新的状态代替当前状态
history.state             // 返回当前状态对象

url 的改变只能由以下 3 种途径引起：
1）点击浏览器的前进或者后退按钮；
2）点击 a 标签；
3）在 JS 代码中直接修改路由

#redux
1.基本原则
1）唯一数据源
  指应用状态的数据应该只存储在唯一的一个store上
2）保持状态只读
  不能直接修改状态，要修改store的状态，必须要通过派发一个action对象完成。store.dispatch
3）数据改变只能通过纯函数完成
  纯函数指函数的返回结果必须完全由参数state和action决定，而且不产生任何副作用，也不能修改参数state和action对象

2.store 一些api
store.subscribe(this.onChange) 监听变化，只要store状态变化，就会调用onChange方法
store.unsubscribe(this.onChange) 注销监听
store.dispatch 改变store中的状态唯一方法就是派发action
store.getState()  获取store中的状态

3.组件context
由于在开发组件时候，都不知道自己的这个组件会应用于哪个应用中，当然不可能预先知道定义唯一Redux Store的文件位置，所以通过直接引用store是不利于组件复用的。
Redux提供的context可以让一个树状组件上的所有组件都能访问一个公共的对象。不过上级组件要宣称自己支持context，并提供一个函数
返回代表context的对象。然后该上级组件的所有子孙组件只要宣称自己需要这个context,就可以通过this.context访问到共同的环境对象


#容器组件和傻瓜组件
傻瓜组件不需要状态，也就是说傻瓜组件只需要根据props来渲染结果，不需要state
容器组件管理状态，负责和redux store打交道





