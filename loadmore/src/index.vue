<template>
  <div class="Y-loadmore">
    <div class="content" :class="{ 'dropped': topDropped || bottomDropped}" :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
      <slot name="top">
        <div class="top" v-if="topMethod&&topStatus!=''">
          <y-spinner v-if="topStatus=='loading'" :size="100"></y-spinner>
          <span class="text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom" v-if="bottomMethod">
        <div class="bottom" v-if="bottomMethod&&bottomStatus!=''">
          <y-spinner v-if="bottomStatus=='loading'" :size="100"></y-spinner>
          <span class="text">{{ bottomText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .Y-loadmore{
    overflow: hidden;
    
    .dropped{
      transition: .6s;
    }

    .content{
      .top{
        position: relative;
        margin-top: -0.51rem;
        /*margin-top: 0.0rem;*/
      }
      .bottom{
        position: relative;
        margin-bottom: -0.51rem;
      } 
      .text{
        font-size: 0.4rem;
      } 
    }
  }
</style>

<script type="text/babel">
  import ySpinner from '../../spinner/src/index'
  export default {
    name: 'y-loadmore',
    components: {
      ySpinner
    },

    props: {
      maxDistance: {
        type: Number,
        default: 0
      },
      autoFill: {
        type: Boolean,
        default: true
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      topDistance: {
        type: Number,
        default: 140
      },
      topMethod: {
        type: Function
      },
      bottomDistance: {
        type: Number,
        default: 140
      },
      bottomMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '下拉刷新',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: '',
        bottomStatus: ''
      }
    },
    methods: {
      init () {
        this.topStatus = ''
        this.topText = '下拉刷新'
        this.bottomStatus = ''
        this.bottomText = '上拉加载更多'
        this.scrollEventTarget = this.getScrollEventTarget(this.$el)
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents()
        }
        if (typeof this.bottomMethod === 'function') {
          this.bindTouchEvents()
        }
      },
      getScrollEventTarget (element) {
        let currentNode = element
        while (currentNode && currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
          }
          currentNode = currentNode.parentNode
        }
        return window
      },
      bindTouchEvents () {
        this.$el.addEventListener('touchstart', this.handleTouchStart)
        this.$el.addEventListener('touchmove', this.handleTouchMove)
        this.$el.addEventListener('touchend', this.handleTouchEnd)
      },
      handleTouchStart (event) {
        this.topStatus = 'pull'
        this.startY = event.touches[0].clientY
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget)
        this.bottomReached = false
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull'
          this.topDropped = false
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull'
          this.bottomDropped = false
        }
      },
      handleTouchMove () {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return
        }
        this.currentY = event.touches[0].clientY
        let distance = (this.currentY - this.startY) / this.distanceIndex
        this.direction = distance > 0 ? 'down' : 'up'
        if (typeof this.topMethod === 'function' && this.direction === 'down' &&
          this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault()
          event.stopPropagation()
          if (this.maxDistance > 0) {
            this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate
          } else {
            this.translate = distance - this.startScrollTop
          }
          if (this.translate < 0) {
            this.translate = 0
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull'
        }

        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached()
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
          this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
          event.preventDefault()
          event.stopPropagation()
          if (this.maxDistance > 0) {
            this.translate = Math.abs(distance) <= this.maxDistance
              ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate
          } else {
            this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance
          }
          if (this.translate > 0) {
            this.translate = 0
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull'
        }
      },
      handleTouchEnd () {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true
          if (this.topStatus === 'drop') {
            this.translate = '100'
            this.topStatus = 'loading'
            this.topText = '加载中...'
            this.topMethod()
          } else {
            this.translate = '0'
            this.topStatus = 'pull'
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true
          this.bottomReached = false
          if (this.bottomStatus === 'drop') {
            this.translate = '-100'
            this.bottomStatus = 'loading'
            this.bottomText = ''
            this.bottomMethod()
          } else {
            this.translate = '0'
            this.bottomStatus = 'pull'
          }
        }
        this.direction = ''
      },
      getScrollTop (element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop
        }
      },
      checkBottomReached () {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight
        } else {
          return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom + 1
        }
      },
      onTopLoaded () {
        this.translate = 0
        setTimeout(() => {
          this.topStatus = 'pull'
          this.topText = '下拉刷新'
        }, 200)
      },
      onBottomLoaded () {
        this.bottomStatus = 'pull'
        this.bottomText = '上拉加载更多'
        this.bottomDropped = false
        this.$nextTick(() => {
          if (this.scrollEventTarget === window) {
            document.body.scrollTop += 50
          } else {
            this.scrollEventTarget.scrollTop += 50
          }
          this.translate = 0
        })
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
