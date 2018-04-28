<template>
  <div class="Y-navbar" :class="{ 'fixed': fixed }" :style="{top: top / 75 + 'rem'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'y-nav-bar',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: ''
    },
    value: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-navbar{
    display: flex;
    text-align: center;
    width: 100%;
  }
  .fixed{
    position: fixed;
  }
</style>
