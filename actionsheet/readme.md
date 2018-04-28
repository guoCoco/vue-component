### 对象组件——actionsheet

1. name: Actionsheet

2. 入参和方法
	function: 
	  (1) open() 
	  	  开起actionsheet
		  param: 类型object 
		  	{
		  	  'actions': actions, // Array类型 由对象组成的数组，每个对象由name和method两个key，name为菜单文本，method为回调函数
		  	  'cancelText': '取消' // string类型 取消按钮文本 默认值为‘取消’
		  	  'closeOnClickModal': 是否直接关闭弹窗，false直接关闭，
		  	  'cancel':取消按钮回调 // function类型
		  	}			
3. 使用方式
	 Actionsheet.open({
		'actions': actions,
		'cancelText': '取消' 
	 })

	Actionsheet.close()

4. 期望效果
	样式符合UI图效果
	点击回调事件正确
	传参效果正确
	实现点击取消或遮罩层关闭组件功能



