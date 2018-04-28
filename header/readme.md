### 复合组件——header(导航栏)

1. name: y-header

2. 入参和方法
    function
	 (1) moreCallback
	 	 右上角点击事件
	 (2) backCallback
	 	 左上角回退事件

	param
	 (1) title
	 (2) backMethod 
	 (3) moreMethod
	 (4) hideBack (default false)
	 (5) backText
	 (6) moreText

	slots
	 (1) name: left
	 (2) name: right
 
3. 使用方式
	<y-header :backMethod="backMethod" :moreMethod="moreMethod" backText="返回" moreText="分享" :hideBack='hideBack' title="标题标题标题标题标题标题标题标题标题">
    	<div slot="left">a</div>
    	<div slot="right">hehe</div>
  	</y-header>

4. 期望效果
	样式符合UI图效果
	可使用父组件点击事件
	



