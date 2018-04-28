### 基础控件——button

1. name: y-button

2. 入参和方法
    param:  // 添加class功能
	 (1) mini ( Boolean类型 是否为小按钮)
	 (2) type ( string类型 default ) 默认为default 
	 (3) disabled ( Boolean类型  ) 默认为false
	 
    slot
   	 文本内容	

    function
	 (1) handleClick()
	 	 点击事件 使用$emit属性

3. 使用方式
	<y-button disabled size="80" type="default" @click.native="test"></y-button>

4. 期望效果
	样式符合UI图效果
	可使用父组件点击事件
	参数输入有效
	



