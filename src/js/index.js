require(["config"], function(){
	require(["jquery", "template", "load","carousel"], function($, template){
		
		/* 轮播图 */
		$(".container").carousel({
			imgs : [
				{src:"/images/banner-1.jpg", href:"#"},
				{src:"/images/banner-2.jpg", href:"#"},
				{src:"/images/banner-3.jpg", href:"#"},
				{src:"/images/banner-4.jpg", href:"#"},
				{src:"/images/banner-5.jpg", href:"#"},
				{src:"/images/banner-6.jpg", href:"#"}
			],
			width: 1263,
			height: 525,
			duration: 3000
		});
		
		/*加载当日精选商品数据*/
		$.getJSON("/mock/choose_day.json", function(data){
			data = {day : data.res_body.data};
			let html = template("choose_template", data);
			//显示
			$(".choose_box").html(html);
		});

		/*加载定制推荐商品数据*/
		$.getJSON("/mock/recommend.json", function(data){
			data = {recommend : data.res_body.data};
			let html = template("recommend_template", data);
			//显示
			$(".recommend_box").html(html);
		});

		/*加载设计精选商品数据*/
		$.getJSON("/mock/design.json", function(data){
			data = {art : data.res_body.data};
			let html = template("design_template", data);
			//显示
			$(".design_box").html(html);
		});

		/*加载当日精选商品数据*/
		$.getJSON("/mock/blink.json", function(data){
			data = {blink : data.res_body.data};
			let html = template("blink_template", data);
			//显示
			$(".blink_box").html(html);
		});
		
		/*加载生活充满创意数据*/
		$.getJSON("/mock/originality.json", function(data){
			data = {origin : data.res_body.data};
			let html = template("origin_template", data);
			//显示
			$(".origin_box").html(html);
		});
		
		/*加载joinUs数据*/
		$.getJSON("/mock/joinus.json", function(data){
			data = {joinus : data.res_body.data};
			let html = template("joinus_template", data);
			//显示
			$(".join_picBox").html(html);
		});

/******************************************************/
/* 加入购物车 */
//$(function(){
//	// 事件委派 
//	// $(".grid_2").delegate("a", "click", function(){
//	// 	console.log(this);
//	// 	return false;
//	// });
//
//	$(".choose_box, .recommend_box, .design_box, .blink_box").on("click", "a", function(){
//		// 当前选购商品对象
//		let product = {
//			pid:$(this).find(".pid").text(),
//			title:$(this).find(".title").text(),
//			price:$(this).find(".price").text(),
//			img:$(this).find(".img").attr("src"),
//			amount:1
//		};
////		console.log(product);接下来是把加入购物车的信息保存在cookie中
//
//		/* cookie */
//		$.cookie.json = true;
//		// 先查找cookie中是否已有保存购物车
//		let _products = $.cookie("products") || [];
//			index = exist(product.pid, _products);
//		if (index === -1) { //新添加商品
//			_products.push(product);
//		} else { //原已有添加,则修改数量
//			_products[index].amount++;
//		}
//		
//		// 重新保存回 cookie中
//		$.cookie("products", _products, {expires:7, path:"/"});
//		alert("加入购物车成功啦！");
//		
//		/* 显示选购的所有商品数量(首页购物车数量 )*/
//		let sum = 0;
//		$.each(_products, function(index,element) {
//			//console.log(this);
//			sum += Number(this.amount);
//		});
//		$(".header_buycar a .piece").text(sum);
//		
//		return false;
//	});
//	
//	//查找指定id的商品在数组中的下标
//	function exist(id, products) {
//		for (let i = 0, len = products.length; i < len ; i++) {
//			if (products[i].pid === id)
//				return i;
//		}
//		
//		return -1;
//	}
//});





	});
});



