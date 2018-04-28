<template>
  <div class="Y-tab-item" 
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'y-tab-item',
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
    id: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-tab-item{
    display: block;
    flex: 1;
    text-decoration: none;
    .is-selected{
      color: red;
    }
  }
</style>
