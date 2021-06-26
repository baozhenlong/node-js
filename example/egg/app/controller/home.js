'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {

	async index() {
		const { ctx, app } = this;
		const res = await ctx.service.product.index();
		// ctx.body = res;
		const mysql = await app.mysql.select('article');
		console.log('数据库信息', mysql);
		await ctx.render('index.html', {
			res,
			lists: [ 'a', 'b', 'c' ],
		});
	}

}

module.exports = HomeController;
