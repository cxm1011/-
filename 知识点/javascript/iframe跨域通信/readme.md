1.父窗口给子窗口发送消息的方式：
iFrame.contentWindow.postMessage('MessageFromIndex1','*');

其实就是在父窗口中操作子窗口发消息，然后让子窗口接收自己刚才发的消息。

2.子窗口给父窗口发送消息的方式：
parent.postMessage( {msg: 'MessageFromIframePage'}, '*');

注意：此处parent === window.parent，即子窗口的父窗口

其实就是在子窗口中操作父窗口发消息，然后让父窗口接收自己刚才发的消息。

总结：所谓的跨窗口发送消息，就是通过在别的窗口操作本窗口发送消息，然后本窗口再自己接收的方式实现。

https://juejin.im/post/590c3983ac502e006531df11
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage