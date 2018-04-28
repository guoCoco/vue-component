<template>
<div class="bgColor" v-show="visible">
  <transition name="y-messagebox">
      <div class="Y-messagebox" v-show="visible">
        <slot></slot>
      </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'y-template',
  data () {
    return {
      callback: null
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../../scss/common/_var.scss';
  @import '../../../scss/common/_mixin.scss';
  .bgColor {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 999;
    .Y-messagebox {
      width: px2rem(540px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: px2rem(24px);
      border: $border-normal;
      text-align: center;
      background-color: $color-white;
      &.y-messagebox-enter {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.7);
      }
      &.y-messagebox-leave-active {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.9);
      }
      transition:.2s;
    }
  }
</style>
