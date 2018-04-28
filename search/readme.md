### 复合组件——search

1. name: y-search

2. 入参和方法
	param: // 添加change动态事件
	  (1) needClear ( Boolean类型 ) 默认为false
	  (2) buttontext  ( string类型 ) 默认为空，不显示，有值则显示按钮
	  (3) inputType	( string类型，input框种类 ) 默认text
	  (4) placeholder ( string类型，占位符 ) 默认为空 
	  (5) inputLength (Number类型， input长度)
	  (6) maxlength (string类型，input字符长度)默认为空
	  (7) needButton (boolean类型)默认false
	function: 
	  (1) on-change()
	  	  返回input输入值
	  (2) handleclick()
		  button点击事件
			
3. 使用方式
  <y-search placeholder='请输入想搜索的内容' :needClear='true':needButton='true' :buttontext='buttontext' v-model='model' @click="searchTest"></y-search>
	
4. 期望效果
	样式符合UI图效果
	正确使用搜索功能


