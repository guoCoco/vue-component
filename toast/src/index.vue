<template>
  <transition name="y-toast">
    <div 
      class="Y-toast" 
      v-show="visible"
      :class="position"
      :style="{'padding': iconClass && position!='top' ? '0.5rem' : '0.4rem', 'top': specificPosition !== '' ? (specificPosition / 75) + 'rem' : ''}"
    >
      <i class="icon" :class="iconClass" v-if="iconClass !== '' && position !== 'top'"></i>
      <div class="text" :style="{ 'padding-top': iconClass && position !== 'top' ? '0.2rem' : '0' }">
        {{ text }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'y-toast',
  data () {
    return {
      visible: false
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  },
  props: {
    text: String,
    position: String,
    specificPosition: {
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .Y-toast{
    position: fixed;
    max-width: 80%;
    border-radius: 0.133333rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transition: opacity .3s linear;

    .text{
      font-size: 0.4rem;
      width: 100%;
      word-break: break-all;
      white-space:normal
    }

    .icon{
      display: block;
      margin: 0 auto;
      width: 1.626667rem;
      height: 1.626667rem;
      margin-bottom: 0.44rem;

      &.success{
        background: url(../../../assets/img/icon.png) no-repeat -5.213333rem -7.253333rem;
        background-size: 9.866667rem 9.866667rem;
      }

      &.fail{
        background: url(../../../assets/img/icon.png) no-repeat -0.493333rem -7.333333rem;
        background-size: 9.866667rem 9.866667rem;
        width: 1.733333rem;
        height: 1.733333rem;
      }
    }

    &.top{
      max-width: 100%;
      width: 100%;
      border-radius: 0px;
      top: 0;
      /*left: 50%;*/
      /*transform: translate(-50%,0);*/

      &.y-toast-enter-active {
        transition: all .6s;
      }
      &.y-toast-leave-active {
        transition: all .6s;
      }
      &.y-toast-enter, &.y-toast-leave-active {
        -webkit-transform: translate(0,-100px);
        transform: translate(0,-100px) !important;
        opacity: 0;
      }
    }

    &.middle{
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &.y-toast-enter-active {
        transition: all .6s ease;
      }
      &.y-toast-leave-active {
        transition: all .6s ease;
      }
      &.y-toast-enter, &.y-toast-leave-active {
        opacity: 0;
      }
    }

    &.bottom{
      bottom: 0.666667rem;
      left: 50%;
      transform: translate(-50%, 0);
      &.y-toast-enter-active {
        transition: all .6s ease;
      }
      &.y-toast-leave-active {
        transition: all .6s ease;
      }
      &.y-toast-enter, &.y-toast-leave-active {
        opacity: 0;
      }
    }

    &.custom{
      left: 50%;
      transform: translate(-50%, 0);
      &.y-toast-enter-active {
        transition: all .6s ease;
      }
      &.y-toast-leave-active {
        transition: all .6s ease;
      }
      &.y-toast-enter, &.y-toast-leave-active {
        opacity: 0;
      }
    }
  }
  
  

</style>
