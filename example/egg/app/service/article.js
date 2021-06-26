'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
	async create(params) {
		const { app } = this;
		try {
			return await app.mysql.insert('article', params);
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	async lists() {
		const { app } = this;
		try {
			return await app.mysql.select('article');
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	async detail(id) {
		if (id === undefined) {
			console.log('id 必须传递且为数值');
			return null;
		}
		const { app } = this;
		try {
			return await app.mysql.get('article', { id });
		} catch (err) {
			console.log(err);
			return null;
		}
	}
}

module.exports = ArticleService;
