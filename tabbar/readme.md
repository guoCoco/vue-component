### 基础控件——tabbar

1. name: y-tab-bar

2. 入参和方法
    param: 
    	fixed: String类型，固定在底部
	 
    slot
   	 文本内容

3. 使用方式
	<y-tab-bar v-model='tabSelected' :fixed='tabFixed'>
      <y-tab-item id='1'>
        <div class="tabContent">
          <img src='../../assets/img/logo.png'/>
          <div>全部</div>
        </div>
      </y-tab-item>
      <y-tab-item id='2'>
        <div class="tabContent">
          <img src='../../assets/img/logo.png'/>
          <div>财产</div>
        </div>
      </y-tab-item>
      <y-tab-item id='3'>
        <div class="tabContent">
          <img src='../../assets/img/logo.png'/>
          <div>健康</div>
        </div>
      </y-tab-item>
      <y-tab-item id='4'>
        <div class="tabContent">
          <img src='../../assets/img/logo.png'/>
          <div>出行</div>
        </div>
      </y-tab-item>
      <y-tab-item id='5'>
        <div class="tabContent">
          <img src='../../assets/img/logo.png'/>
          <div>原型</div>
        </div>
      </y-tab-item>
    </y-tab-bar>

4. 期望效果
	样式符合UI图效果
	可使用父组件点击事件
	参数输入有效
	



