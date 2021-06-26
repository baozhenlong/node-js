'use strict';
const Controller = require('egg').Controller;

class ProductController extends Controller {

	async index() {
		const { ctx } = this;
		const res = await ctx.service.product.index();
		ctx.body = res;
	}

	async getQuery() {
		const { ctx } = this;
		console.log(ctx.query); // { name: 'damon', age: '18' }
		const {
			name,
			age,
		} = ctx.query;
		ctx.body = `name: ${name}, age: ${age}`;
	}

	async getParams() {
		const { ctx } = this;
		console.log(ctx.params); // { name: 'damon', age: '18' }
		const {
			name,
			age,
		} = ctx.params;
		ctx.body = `name: ${name}, age: ${age}`;
	}

	async postCreate() {
		const { ctx } = this;
		console.log(ctx.request.body); // { name: 'damon', age: 18 }
		const {
			name,
			age,
		} = ctx.request.body;
		ctx.body = {
			name,
			age,
		};
	}

	async putUpdate() {
		const { ctx } = this;
		console.log(ctx.params); // { name: 'stefan', age: "16" }
		console.log(ctx.query);
		const {
			name,
			age,
		} = ctx.params;
		ctx.body = {
			name,
			age,
		};
	}

	async delete() {
		const { ctx } = this;
		console.log(ctx.params); // { id: "10" }
		const { id } = ctx.params;
		ctx.body = {
			id,
		};
	}

}

module.exports = ProductController;
