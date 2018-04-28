<template>
  <li class="Y-indexsection">
    <p class="index">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<style lang='scss' scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-indexsection{
    padding: 0;
    margin: 0;
    .index{
      padding: 0.266667rem;
      margin: 0;
      background-color: #cacaca;
      font-size: 0.346667rem;

      &:ul{
        margin: 0;
      }
    }
  }
</style>

<script>
  export default {
    name: 'y-index-section',
    props: {
      index: {
        type: String,
        required: true
      }
    },
    mounted () {
      this.$parent.sections.push(this)
    },

    beforeDestroy () {
      let index = this.$parent.sections.indexOf(this)
      if (index > -1) {
        this.$parent.sections.splice(index, 1)
      }
    }
  }
</script>
