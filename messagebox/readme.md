### 对象组件——messagebox

1. name: Messagebox

2. 入参和方法
    function 
      (1) alert()
      	  param:
		    {
			  title: '',  // 默认
			  message: '' // 默认为空
			  confirmButtonText: ''//默认为"确认"
			}

		  出参:
		  	promise异步回调resolve	  
	
      (2) confirm()
		  param:
		  	{
		  	title: '',  // 默认
			  message: '' // 默认为空
			  confirmButtonText: ''//默认为"确认"
		  	  cancelButtonText: ''//默认为取消
		  	}

		  出参:
		  	promise异步回调resolve, reject

      (3) prompt()
		  param:
		  	{
		  	title: '',  // 默认
			  message: '' // 默认为空
			  confirmButtonText: ''//默认为"确认"
		  	  cancelButtonText: ''//默认为取消
		  	  inputType: '', //input框种类，默认为‘text’
		  	  placeholder: '' //占位符
		  	  text: '',//input值
		  	}

		  出参:
		  	promise异步回调resolve, reject

	 

3. 使用方式
  this.$Messagebox.alert({
    title: '提示',
    message: '你是不是傻弹窗内容你觉得即可回头你是不是傻弹窗内容你觉得即可回头你是不是傻弹窗内容你觉得即可回头'
  }).then(actions => {})

4. 期望效果
	样式符合UI图效果
	回调方式有效
	参数输入有效
	



