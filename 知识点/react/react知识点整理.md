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




