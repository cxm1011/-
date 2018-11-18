#使用webpack踩坑记录
1.全局安装webpack后，输入webpack -v,提示需要安装webpack-cli,但是全局安装webpack-cli后还有该提示,使用命令如下：
sudo cnpm install webpack-cli -g
安装完之后输入：webpack-cli -v  出现版本号
解决方法:先使用sudo -s，输入密码后，再输入：cnpm install webpack-cli -g  即可

2.在import from XXX  时，如果webpack没有配置
resolve: {
        // 自动补全的拓展名
        extensions: ['.js', '.jsx', '.json', '.less'],
    },
则需写上后缀名

3.webpack优化
体积： dll  压缩外部依赖
速度： 
1)对于include，精确指定要处理的目录，可以减少不必要的遍历，从而减少性能损失
2）Webpack 默认提供的 UglifyJS插件，由于采用单线程压缩，速度颇慢 ；推荐采用 webpack-parallel-uglify-plugin 插件，它可以并行运行 UglifyJS 插件，更加充分而合理的使用 CPU 资源，这可以大大减少的构建时间

4.contenthash chunkhash bij
https://juejin.im/post/5a4502be6fb9a0450d1162ed

5.当输入有多个文件时，输入应使用占位符进行区分.区分可以使用name-hash或者name-chunkhash方式
 entry: {
        main: __dirname+'/src/script/main.js',
        a: __dirname+'/src/script/a.js'
    },
    output: {
        path: __dirname+'/dist/js',
        // filename: 'bundle.js'
        // filename: '[name]-[chunkhash].js'  //当入口有多个文件时,使用chunkhash
        filename: '[name]-[hash].js'  //当入口有多个文件时，使用占位符
    }

6.plugin
1)html-webpack-plugin

7.启动提示：
Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
解决方法：
由于使用的是全局的 webpack，找不到某些目录，将全局的指向自己当前的项目即可。
在项目目录执行 npm link webpack

8.项目打包后不压缩启动命令
webpack --mode development

9.loader
eg:
module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ['style-loader', 'css-loader?minimize'],
      }
    ]
  }

.css 结尾的文件时先使用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里。 在配置 Loader 时需要注意的是：

1)use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
2)每一个 Loader 都可以通过 URL querystring 的方式传入参数，例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。

给 Loader 传入属性的方式除了有 querystring 外，还可以通过 Object 传入，以上的 Loader 配置可以修改为如下：

use: [
  'style-loader', 
  {
    loader:'css-loader',
    options:{
      minimize:true,
    }
  }
]

除了在 webpack.config.js 配置文件中配置 Loader 外，还可以在源码中指定用什么 Loader 去处理文件。 以加载 CSS 文件为例，修改上面例子中的 main.js 如下：

require('style-loader!css-loader?minimize!./main.css');
这样就能指定对 ./main.css 这个文件先采用 css-loader 再采用 style-loader 转换。

10.webpack-dev-server: command not found

使用yarn add webpack-dev-server -g不行。但是使用npm install  webpack-dev-server -g则可以

11.
resolve:
配置webpack如何寻找模块所对应的文件
