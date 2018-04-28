### 对象组件——toast

1. name: y-toast

2. 入参和方法
    function
	 (1) open() // needIcon待定
	 	 param: 类型object 
	 	 {
	 	 	'text':'', // 内容
	 	 	'position': '', // 'top','bottom','middle' 默认middle，当top时为特殊样式
	 	 	'duration': '3000', // Number类型，单位ms，默认值是3000
	 	 	'iconClass': ''  //String类型，icon类型，默认为不显示，可选success，fail或自定义class
	 	 }
	 
	 (2) close()
		 手动关闭toast
3. 使用方式
	Toast.open({
	 	'text':'', // 内容
	 	'position': 'top', // 'top','bottom','middle' 默认middle，当top时为特殊样式
	 	'duration': '3000', // Number类型，单位ms，默认值是3000
	 	'iconClass': 'success' // Boolean类型，是否需要icon，默认false
	})
	
	Toast.close()


4. 期望效果
	样式符合UI图效果
	参数输入有效
	内部方法正确使用



