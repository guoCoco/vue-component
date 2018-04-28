<template>
  <div class="Y-tabbar" :class="{ fixed: fixed }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'y-tab-bar',
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
    value: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  @import '../../../scss/common/_var.scss';
  .Y-tabbar{
    /*background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-color: #fff;*/
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    position: relative;
    /*background-color: #fafafa;*/
    display: flex;
    text-align: center;
    width: 100%;
  }
  .fixed{
    position: fixed;
    bottom: 0;
    z-index: $z-index-normal;
  }
</style>
