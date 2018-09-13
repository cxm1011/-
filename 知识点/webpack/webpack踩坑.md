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