### 基础控件——input

1. name: y-input

2. 入参和方法
    param: 
	 (1) size ( number类型 百分比宽度 0-100 ) 默认为80
	 (2) inputType ( string类型  ) input框类型，默认是text
	 (3) needClear ( Boolean类型  ) 是否需要清除按钮，默认为false
	 (4) placeholder ( string类型 ) 修改placeholder属性，默认为空
	 (5) maxlength (string类型，input字符长度)默认为空
    function:
	 (1) on-change()
	 	 返回input的值
	 	 父组件可以通过该方法监控input值的变化
	 (2) clear()
		 点击事件，清除input框值
3. 使用方式
<y-input :size='100' placeholder='请输入' inputType='text' :needClear='true' v-model='model'></y-input>

4. 期望效果
	样式符合UI图效果
	入参符合效果
	内部方法可正确执行并返回有效参数
	



