### 基础控件——navbar

1. name: y-nav-bar

2. 入参和方法
    param:  
      fixed Boolean类型，是否固定
      top:  String类型，距上边距距离
	 
    slot
   	 文本内容

3. 使用方式
	<y-nav-bar v-model='navSelected' :fixed='tabFixed' top='100'>
      <y-tab-item id='1'>
        <div class="content">
          全部
        </div>
      </y-tab-item>
      <y-tab-item id='2'>
        <div class="content">
          财产
        </div>
      </y-tab-item>
      <y-tab-item id='3'>
        <div class="content">
          健康
        </div>
      </y-tab-item>
      <y-tab-item id='4'>
        <div class="content">
          出行
        </div>
      </y-tab-item>
    </y-nav-bar>

4. 期望效果
	样式符合UI图效果
	可使用父组件点击事件
	参数输入有效
	



