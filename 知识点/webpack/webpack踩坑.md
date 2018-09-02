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