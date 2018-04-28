### 复合组件——indexsection

1. name: y-indexsection

2. 入参和方法
	  param:
	  	index ( string值，索引值 )
			
3. 使用方式
	<y-index-list>
	  <y-index-section index="A">
	    <y-cell v-for="item in items">
	      <div slot='title'>{{item}}</div>
	    </y-cell>
	  </y-index-section>
	</y-index-list>

4. 期望效果
	样式符合UI图效果
	检索功能正常使用


