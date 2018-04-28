<template>
	<span
		class="Y-clearevt"
		@click="handleClick" v-show="disabled">
	</span>
</template>

<script>
export default {
  name: 'y-clearevt',
  data () {
    return {
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
	.Y-clearevt{
    display: inline-block;
    // position: absolute;
    // top: 0.5rem;
    // right: auto;
    background: url(../../../assets/img/icon.png) no-repeat -1.066667rem -2.973333rem;
    width: 0.466667rem;
    height:0.466667rem;
    background-size: 9.866667rem 9.866667rem;
	}
</style>
