<template>
	<div 
	  class="Y-spinner"
	  :type="type"
	  :style="{ width: spinnerSize,
	   height: spinnerSize,
	   backgroundSize:bgSize,
	   backgroundPositionX:bgPositionX,
	   backgroundPositionY:bgPositionY}"
	>
	</div>
</template>

<script>
let vm = ''
export default {
  name: 'y-spinner',
  data () {
    return {
      spinnerColor: '#fff',
      viwSize: ''
    }
  },
  created () {
    vm = this
  },
  computed: {
    spinnerSize () {
      vm.viwSize = (vm.size || 80) / 75
      return ((vm.size || 80) / 75) + 'rem'
    },
    bgSize () {
      return ((vm.viwSize * (740 / 75)) / (65 / 75)) + 'rem'
    },
    bgPositionX () {
      return -((vm.viwSize * (504 / 75)) / (65 / 75)) + 'rem'
    },
    bgPositionY () {
      return -((vm.viwSize * (409 / 75)) / (65 / 75)) + 'rem'
    }
  },
  props: {
    size: Number,
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang='scss' scoped>
  .Y-spinner{
/*    position: absolute;
    top: 50%;
    left: 50%;*/
    margin: auto;
    background: url(../../../assets/img/icon.png) no-repeat;
    -webkit-animation: circle 2s infinite linear;
  /*匀速 循环*/
  }
  @-webkit-keyframes circle {
  0% {
    transform:rotate(0deg); 
  }
  100% {
    transform:rotate(360deg); 
    } }
</style>
