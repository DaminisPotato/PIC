require("babel-core/register");
require("babel-polyfill");
// express-derouter必备
require('babel-register');
const express = require('express');
// 启用文件路径path相关方法给予express-derouter使用
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/config');
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = express.Router();
/**
 * // token验证模块
 * @type {Strategy}
 */
const Strategy = require('passport-http-bearer').Strategy;

/**
 * 初始化passport模块
 */
app.use(passport.initialize());

/**
 *  命令行中显示程序运行日志,便于bug调试
 */
app.use(morgan('dev'));

/**
 * 启用jwtAuth机制,自动屏蔽掉不带有token的请求,并且排除/user/register /user/login
 * 保留注册,登录请求
 */
// app.use(jwtAuth);
/**
 * 解析所有请求体, 所有的访问的req对象添加一个body属性
 */
app.use(bodyParser.urlencoded({extended: false}));

/**
 * 调用bodyParser模块以便程序正确解析body传入值
 */
app.use(bodyParser.json());
/**
 * 中间件,token校验所有API （除/users/register与/users/login之外）
 */


/**
 * 连接MongoDB数据库
 */
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {useNewUrlParser: true}); // 连接数据库

/**
 * 启用express-derouter,采用类似于SpringMVC的方式进行注解的路由写法
 */
require('express-derouter').register({
    app,
    routesDir: path.join(__dirname, 'routes') // 扫描jwt下的routes包中的所有路径
});


app.listen(5000, () => console.log('Server started on port 5000'));


