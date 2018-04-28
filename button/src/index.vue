<template>
  <button 
    class="Y-button" 
    :class="['Y-button_' + type, {
      disabled: disabled,
      mini: mini
    }]"
    @click="handleClick"
    :disabled="disabled"
    >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'y-button',
  data () {
    return {
    }
  },
  computed: {
    buttonSize () {
      return (this.size || 80) + '%'
    }
  },
  created () {
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  props: {
    mini: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-button{
    width: px2rem(650px);
    height: px2rem(90px);
    border-radius: 2.25rem;
    appearance: none;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: px2rem(34px);
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    margin: 0 auto;

    &.mini{
      width: px2rem(312px) !important;
      font-size: px2rem(36px) !important;
    }

  }

  .Y-button_default{
    background-color: transparent;
    border: #ff2d55 solid 2px;
    color: #ff2d55;

    &:active{
      background-color: #ff2d55;
      color: #fff;
    }

    &:disabled{
      border: #c7c7c7 solid 2px;
      color: #c7c7c7;
      &:active{
        background-color: transparent;
        color: #c7c7c7;
      }
    }
  }
  
  .Y-button_word{
    color: #ff2d55;
    background-color: transparent;
    border: none !important;
    &:disabled{
      color: #c7c7c7;
    }
  }
</style>
