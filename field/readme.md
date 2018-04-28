### 复合组件——field

1. name: y-field

2. 入参和方法
    param:
	  (1) label ( string类型，标题 ) 
	  (2) needClear ( Boolean，是否需要clear按钮 ) 默认为false
	  (3) inputtype	( string类型，input框种类 ) 默认text
	  (4) placeholder ( string类型，占位符 ) 默认为空 
	  (5) labelLength (Number类型，label长度)默认20
		(6) inputLength (Number类型， input长度)默认100-laberLength 
		(7) maxlength (string类型，input字符长度)默认为空
	slot
	  (1) rightIcon 

	function
	  (1) on-change()
	      获取input框输入值

3. 使用方式
 <y-field placeholder='请输入标题' :needClear='true' label='标题' @on-change='onChange' v-model="yfieldValue" :inputLength="70">
  <span slot='rightIcon' class="field-icon"></span>
</y-field>

4. 期望效果
	样式符合UI图效果
	入参符合效果
	slot自定义有效
	



