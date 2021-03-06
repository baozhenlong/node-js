'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
   * built-in config
   * @type {Egg.EggAppConfig}
   * */

	exports = {};
	const config = exports;

	// use for cookie sign key, should change to your own and keep security
	config.keys = `${appInfo.name}_1622633882457_9337`;

	// add your middleware config here
	config.middleware = [];

	// 安全防范
	config.security = {
		csrf: {
			enable: false,
		},
	};

	config.view = {
		mapping: {
			'.html': 'ejs',
		},
	};

	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: 'localhost',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: '112233',
			// 数据库名
			database: 'egg',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	return {
		...config,
		...userConfig,
	};
};
