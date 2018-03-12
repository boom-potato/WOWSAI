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

	});
});



