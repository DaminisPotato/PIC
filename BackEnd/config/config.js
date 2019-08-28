module.exports = {
    // used when we create and verify JSON Web Tokens of verifying email
    'secret': '这个是我们第一个secretKey',
    // administrator secret key
    'adminSecret': 'this_is_the_admin_secret_key',
    // 邮件失效时间
    "email_expireTime": '1d',
    // 设定邮件的发件人
    'email_from': 'kingOfUniverse@greatest.com',
    // 设定邮件的标题
    'email_subject': 'Verification Email',
    // 设定sendGrid服务的apikey
    'apiKey': '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',

    // MongoDB的地址
    'mongo_host': process.env.MONGO_HOST || 'localhost',
    'mongo_port': process.env.MONGO_PORT || 27017,
    'mongo_database': process.env.MONGO_DB || 'test',

    // Redis address
    'redis_host': process.env.REDIS_HOST || 'localhost',
    'redis_port': process.env.REDIS_PORT || 6379,
    'redis_password': process.env.REDIS_PASSWORD || 'foobared',

    // port
    'port': process.env.PORT || 3000,

    // 邮箱验证成功之后的重定向地址
    'redirectUrl': 'http://localhost:3000/login',

    // 网站路径
    'url': 'http://localhost:3000'
};


