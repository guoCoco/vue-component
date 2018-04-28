<template>
  <transition name="y-indicator">
  	<div id="yIndicator"
  	  class="Y-indicator"
  	  v-show="visible"
  		>
      <!-- <div class="content"> -->
        <y-spinner></y-spinner>
        <div class="text" v-text="text">
      <!-- </div> -->
      </div>
  	</div>
  </transition>
</template>

<script>
import ySpinner from '../../../components/spinner/src/index'
export default {
  name: 'y-indicator',
  data () {
    return {
      visible: false
    }
  },
  components: {
    ySpinner
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  props: {
    text: String,
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
.Y-indicator{
  position: fixed;
  max-width: 80%;
  border-radius: 0.133333rem;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 999;
  top:50%;
  left:50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  padding: 0.533333rem;
  
  .text{
    padding-top: 0.266667rem; 
    font-size: 0.4rem;
    width: 100%;
    word-break: break-all;
    white-space:normal
  }

  &.y-indicator-enter-active {
    transition: all .1s ease;
  }
  &.y-indicator-leave-active {
    transition: all .1s ease;
  }
  &.y-indicator-enter, &.y-indicator-leave-active {
    opacity: 0;
  }
  
}

</style>
