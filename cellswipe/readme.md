### 基础控件——cell-swipe

1. name: y-cell-swipe

2. 入参和方法
    param: 
	  (1) title ( string类型，标题 ) 
	  (2) titlelabel ( string类型，副标题 )
	  (3) value	( string类型，内容 ) 
	  (4) valuelabel ( string类型，副内容 )
	  (5) to (string类型，点击跳转跳转)
	  (6) icon (string类型，显示左侧图标，支持)
	  (7) isLink (Boolean类型，是否有右侧箭头符号)
	  (8) right (Array类型，右滑，由对象组成，每个对象包含content，style，handler)
	  (9) left （Array类型，左滑，结构同上）
	  
	slot 自定义内容
	  (1) title
	  (2) icon
	  (3) value (默认icon)

3. 使用方式
	<y-cell-swipe title='标题' titlelabel='副标题' value='内容' valuelabel='副内容' :right='[{
	  content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: (e) => consle.log('123') 
	}]'>
	</y-cell-swipe>
	<y-cell-swipe>
		<div slot='title'></div>
	</y-cell-swipe>

4. 期望效果
	样式符合UI图效果
	入参符合效果
	slot自定义有效
	



