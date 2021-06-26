'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);

	// 使用 Postman 工具测试
	// get
	router.get('/product', controller.product.index);
	router.get('/product/getQuery', controller.product.getQuery); // getQuery?name=damon&age=18
	router.get('/product/getParams/:name/:age', controller.product.getParams); // getParams/damon/18
	// post
	router.post('/product/postCreate', controller.product.postCreate);
	// put
	router.put('/product/putUpdate/:name/:age', controller.product.putUpdate); // putUpdate/stefan/16
	// delete
	router.delete('/product/delete', controller.product.delete); // delete/10

	// 文章发布
	router.post('/article/create', controller.article.create);
	// 文章列表
	router.get('/article/lists', controller.article.lists);
	// 文章详情页
	router.get('/article/detail/:id', controller.article.detail);
};
