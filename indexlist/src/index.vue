<template>
  <div class="Y-indexlist">
    <ul class="content" ref="content" :style="{ 'height': currentHeight + 'px' }">
      <slot></slot>
    </ul>
    
    <div class="nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="navlist">
        <li class="navitem" v-for="section in sections">
          {{ section.index }}
        </li>
      </ul>
    </div>
    
    <div class="indicator" v-if="showIndicator" v-show="moving">
      {{ currentIndicator }}
    </div>
  </div>
</template>

<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-indexlist{
    width: 100%;
    position: relative;
    overflow: hidden;

    .content{
      margin: 0;
      padding: 0;
      overflow: auto;
      -webkit-overflow-scrolling:touch;
    }

    .nav{
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      background-color: #fff;
      border-left: solid 1px #ddd;
      text-align: center;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .navlist{
        padding: 0;
        margin: 0;
        list-style: none;
        max-height: 100%;
        display: flex;
        flex-direction: column;

        .navitem{
          padding: 0.026667rem 0.08rem;
          font-size: 0.266667rem;
          user-select: none;
          -webkit-touch-callout: none;
        }

      }
    }

    .indicator{
      position: absolute;
      /*size: 0.666667rem;*/
      padding: 0.266667rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      line-height: 50px;
      background-color: rgba(0, 0, 0, .7);
      border-radius: 5px;
      color: #fff;
      font-size: 0.4rem;
    }

  }
</style>

<script type="text/babel">
  export default {
    name: 'y-index-list',

    props: {
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0
      }
    },

    watch: {
      sections () {
        this.init()
      }
    },

    methods: {
      init () {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth / 75
        })
        let listItems = this.$refs.content.getElementsByTagName('li')
        if (listItems.length > 0) {
          this.firstSection = listItems[0]
        }
      },

      handleTouchStart (e) {
        if (e.target.tagName !== 'LI') {
          return
        }
        this.navOffsetX = e.changedTouches[0].clientX
        this.scrollList(e.changedTouches[0].clientY)
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime)
        }
        this.moving = true
        window.addEventListener('touchmove', this.handleTouchMove)
        window.addEventListener('touchend', this.handleTouchEnd)
      },

      handleTouchMove (e) {
        e.preventDefault()
        this.scrollList(e.changedTouches[0].clientY)
      },

      handleTouchEnd () {
        this.indicatorTime = setTimeout(() => {
          this.moving = false
          this.currentIndicator = ''
        }, 500)
        window.removeEventListener('touchmove', this.handleTouchMove)
        window.removeEventListener('touchend', this.handleTouchEnd)
      },

      scrollList (y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y)
        if (!currentItem || !currentItem.classList.contains('navitem')) {
          return
        }
        this.currentIndicator = currentItem.innerText
        let targets = this.sections.filter(section => section.index === currentItem.innerText)
        let targetDOM
        if (targets.length > 0) {
          targetDOM = targets[0].$el
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top
        }
      }
    },

    mounted () {
      if (!this.currentHeight) {
        this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top
      }
      this.init()
    }
  }
</script>
