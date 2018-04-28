### 基础控件——swipe

1. name: y-swipe

2. 入参和方法
    props: 
	 (1) auto ( Number类型 自动轮播时间) default 3000
	 (2) defaultIndex ( Number类型 初始显示列表索引 ) default 0
 	 (3) showIndicators ( Boolean类型 是否显示指示点 ) default true
 	 (4) continuous ( Boolean类型 是否自动轮播 ) default true
	
	function:
	 (1) next()
	 	 进入下一页
	 (2) prev()
		 回退上一页
    
    slot
     (1) 页面内容	 (y-swipe-item)

3. 使用方式
	<y-swipe>
		<y-swipe-item>1</y-swipe-item>
		<y-swipe-item>2</y-swipe-item>
		<y-swipe-item>3</y-swipe-item>
	</y-swipe>

4. 期望效果
	样式符合UI图效果
	动画效果流畅
	参数输入有效
	



