<template>
  <transition name="Y-content">
    <div class="Y-actionsheet" @click='closeSheet' v-show="onAction"> 
        <div class="layer" @touchmove.prevent></div>
        <div class='y-content'  
        v-bind:class="{isactive: !isactive }" @touchmove.prevent >
          <ul>
            <li v-for='action in actions' @click="actionClick($event)" >{{action.name}}</li>
          </ul>
          <div class="cancel" @click="cancel($event)">{{cancelText}}</div>
        </div> 
    </div> 
  </transition>
</template>
<script>
// let vm = ''
export default {
  name: 'y-actionsheet',
  data () {
    return {
      onAction: true,
      actions: [],
      cancelText: 'cancelText',
      isactive: true,
      closeOnClickModal: false
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  components: {
  },
  methods: {
    closeSheet () {
      if (!this.closeOnClickModal) {
        this.close()
        this.onAction = false
        this.isactive = false
      }
    }
  },
  props: {
  }
}
</script>
<style lang=scss scoped>
  @import '../../../scss/common/_mixin.scss';
  .Y-actionsheet{
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 2;
    .layer{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .2);
      z-index: 900;
    } 
    .y-content{
      background: white;
      opacity: 1;
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      font-size:px2rem(32px); 
      color: #242424;
      animation:up .1s ease;
      -webkit-animation: up .1s ease;
      .cancel{
        padding-top: px2rem(20px);
        padding-bottom: px2rem(20px);
        text-align: center;
        border-top: 5px solid #e9e9e9
      }
      li{
        text-align: center;
        padding-top: px2rem(20px);
        padding-bottom: px2rem(20px);
      }
    }
    .isactive{
      animation:down .1s ease;
    }
  }
  @keyframes up
  {
    from {bottom:-50%;}
    to {bottom:0px;}
  }
  @-webkit-keyframes up
  {
    from {bottom:-50%;}
    to {bottom:0px;}
  }
  @keyframes down
  {
    from {bottom:0%;}
    to {bottom:-50%;}
  }
  @-webkit-keyframes down
  {
    from {bottom:0%;}
    to {bottom:-50%;}
  } 
  .Y-content-enter-active {
    transition: all 0.1s ease;
  }
   .Y-content-leave-active {
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .Y-content-enter, .Y-content-leave-active {
    opacity: 0;
  }
 </style>
