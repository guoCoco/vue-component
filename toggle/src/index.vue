<template>
	<label class="Y-toggle">
    <input @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <div class="track"> 
     <div class="handle"></div>
    </div>
  </label>
</template>
<!--   v-model="toggle" -->
<script>
  export default {
    name: 'y-toggle',
    data () {
      return {
      }
    },
    created () {
    },
    computed: {
      currentValue: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang='scss' scoped>
.Y-toggle {
  position: relative;
  display: inline-block;
  pointer-events: auto;
  margin: -0.133333rem;
  padding: 0.133333rem;
  &.dragging .handle {
    background-color: #f2f2f2 !important; 
  }
  input:checked + .track {
    border-color: #4cd964;
    background-color: #4cd964;
  }
  input {
    display: none; 
  }
  .track {
  	-webkit-transition-timing-function: ease-in-out;
  	transition-timing-function: ease-in-out;
  	-webkit-transition-duration: 0.3s;
  	transition-duration: 0.3s;
  	-webkit-transition-property: background-color, border;
  	transition-property: background-color, border;
  	display: inline-block;
  	box-sizing: border-box;
  	width: 1.36rem;
  	height: 0.826667rem;
  	border: solid 0.053333rem #e6e6e6;
  	border-radius: 0.533333rem;
  	background-color: #fff;
  	content: ' ';
  	cursor: pointer;
  	pointer-events: none;
  }
  .handle {
  	-webkit-transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);
  	transition: 0.3s cubic-bezier(0, 1.1, 1, 1.1);
  	-webkit-transition-property: background-color, transform;
  	transition-property: background-color, transform;
  	position: absolute;
  	display: block;
  	width: 0.72rem;
  	height: 0.72rem;
  	border-radius: 0.72rem;
  	background-color: #fff;
  	top: 0.186667rem;
  	left: 0.186667rem;
  	box-shadow: 0 0.053333rem 0.186667rem rgba(0, 0, 0, 0.35), 0 0.026667rem 0.026667rem rgba(0, 0, 0, 0.15);
  }
  .handle:before {
    position: absolute;
    top: -0.106667rem;
    left: -0.573333rem;
    padding: 0.493333rem 0.906667rem;
    content: " ";
  }
  input:checked + .track .handle {
  	-webkit-transform: translate3d(0.533333rem, 0, 0);
  	transform: translate3d(0.533333rem, 0, 0);
  	background-color: #fff;
  }
  input:disabled + .track {
    opacity: 0.6;
  }
}
</style>
