<template>
  <div class="Y-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'y-swipe-item',
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
  },
  mounted () {
    this.$parent && this.$parent.swipeItemCreated(this)
  },
  destroyed () {
    this.$parent && this.$parent.swipeItemDestroyed(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
</style>
