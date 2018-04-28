### 复合组件——loadmore

1. name: y-loadmore

2. 入参和方法
	param:
	  topMethod （ function类型，下拉回调方法）

	  bottomMethod （ function类型，上拉加载回调方法 ）
	  
	  bottomAllLoaded （ Boolean类型，关闭上拉加载，为true时表明加载已经全部结束，为false时，表示尚为加载完毕 ）


	function: 
	  onTopLoaded() // 下拉刷新结束声明，复位

	  onBottomLoaded() // 上拉加载结束声明，复位

			
3. 使用方式
	<y-loadmore :topMethod='topMethod' :bottomMethod='bottomMethod' bottomAllLoaded='allLoaded' ref='loadmore'>
	  // ...
	</y-loadmore>

	topMethod() {
	  // ...
	  this.$refs.loadmore.onTopLoaded();
	}

	bottomMethod() {
	  // ...
	  this.allLoaded = true;
	  this.$refs.loadmore.bottomMethod();
	}

4. 期望效果
	样式符合UI图效果
	下拉刷新，上拉回调事件调用正常
	复位方法正常调用



