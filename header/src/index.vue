<template>
	<div class="Y-header box_horizontal" :class="{fixed: fixed}" :style="{background: backgroundColor, color: color}">
    <div class="left" @click="backCallback">
      <slot name="left">
        <div class="arrow" v-if="!hideBack">{{ backText }}</div>
      </slot>
    </div>
    <div class="title">{{ title }}</div>
    <div class="right" @click="moreCallback">
      <slot name="right">
        <div class="more">{{ moreText }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'y-header',
  data () {
    return {
      bgColor: ''
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    backCallback (evt) {
      if (this.backMethod && typeof this.backMethod === 'function' && !this.hideBack) {
        this.backMethod()
      }
    },
    moreCallback (evt) {
      if (this.moreMethod && typeof this.moreMethod === 'function') {
        this.moreMethod()
      }
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    backMethod: {
      type: Function
    },
    moreMethod: {
      type: Function
    },
    backText: {
      type: String,
      default: ''
    },
    moreText: {
      type: String,
      default: ''
    },
    hideBack: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#464646'
    },
    fixed: Boolean
  }
}
</script>

<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-header{
    position: relative;
    width: 100%;
    height: px2rem(88px);
    font-size: px2rem(36px);
    text-align: center;
    margin: 0 auto; 
    z-index: 1;
    
    &.fixed{
      position: fixed;
      top: 0;
    }

    .left{
      width: 25%;
      .arrow{
        position: absolute;
        width: 25%;
        height: px2rem(88px);
        line-height: px2rem(88px);
        padding-left: px2rem(16px);

        &:before {
          content: "";
          position: absolute;
          width: px2rem(28px);
          height: px2rem(28px);
          border: 1px solid #000;
          border-width: px2rem(4px) 0 0 px2rem(4px);
          transform: rotate(315deg);
          top: px2rem(29px);
          left: px2rem(42px);
        }
      }
    }
    .title{
      width: 50%;
      line-height: px2rem(88px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    } 
    .right{
      width: 25%;
      .more{
        line-height: px2rem(88px);
      }
    }
  }
</style>
