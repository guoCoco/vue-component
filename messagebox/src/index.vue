<template>
<div class="bgColor" v-show="visible">
  <transition name="y-messagebox">
		  <div class="Y-messagebox" v-show="visible">
			  <div class="mesg-text" v-text="title"></div>
			  <div class="mesg-message" v-text="message" v-if="$type!='prompt'"></div>
       <y-input class="mesg-input" v-if="$type=='prompt'"
        :placeholder='placeholder'
        :inputType='inputType'
        :needClear='true'
        v-model='inputValue'
        :size='100'
        ref='refInput'></y-input>
			  <div class="mesg-button">
			    <div class="mesg-Cancel" v-text="cancelButtonText" @click="handleAction('cancel')" :style="{'color': cancelButtonColor}" v-if="$type!='alert'"></div>
          <div class="mesg-OK" v-text="confirmButtonText" :style="{ width: $type=='alert' ? '100%' : '50%', 'border-bottom-left-radius': $type=='alert' ? '0.32rem' : '0', 'color': confirmButtonColor}"  @click="handleAction('confirm')"></div>
			  </div>
		  </div>
  </transition>
</div>
</template>

<script>
import yInput from '../../../components/input/src/index'
export default {
  name: 'y-messagebox',
  data () {
    return {
      visible: false,
      callback: null
    }
  },
  components: {
    yInput
  },
  computed: {
  },
  created () {
  },
  methods: {
    handleAction (action) {
      // if (this.$type === 'confirm') {
      //   retrun
      // }
      // console.log(this)
      let callback = this.callback
      this.visible = false
      if (this.$type === 'prompt') {
        this.$refs.refInput.model = ''
      }
      callback(action)
    }
  },
  props: {
    title: String,
    message: String,
    confirmButtonText: String,
    cancelButtonText: String,
    text: String,
    inputType: String,
    placeholder: String,
    $type: String,
    cancelButtonColor: String,
    confirmButtonColor: String
  }
}
</script>

<style lang='scss' scoped>
  @import '../../../scss/common/_var.scss';
  @import '../../../scss/common/_mixin.scss';
  .bgColor {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
		z-index: 999;
    .Y-messagebox {
      width: px2rem(540px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: px2rem(24px);
      border: $border-normal;
      text-align: center;
      background-color: $color-white;
      &.y-messagebox-enter {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.7);
      }
      &.y-messagebox-leave-active {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.9);
      }
      transition:.2s;
    .mesg-text {
      font-size: px2rem(34px);
      height: px2rem(114px);
      line-height: px2rem(114px);
      margin:0 px2rem(40px);
    }
    .mesg-message {
      line-height: px2rem(30px); 
      font-size: px2rem(26px);
      word-wrap: break-word; 
      margin:0 px2rem(40px) px2rem(40px);
    }

    .mesg-button {
      width: 100%;
      font-size: px2rem(32px);
      border-top: $border-normal;
      box-sizing: border-box;
      height: px2rem(100px); 
      line-height: px2rem(100px);
      .mesg-OK {
        float: left;
        border-bottom-right-radius: px2rem(24px);
        &:active{
          background-color: #ff2d55;
          color: $color-white;
        }
      }
      .mesg-Cancel {
        width: 50%;
        float: left;
        border-bottom-left-radius: px2rem(24px);
        &:before {
          content: '';
          position: absolute;
          display: block;
          width: 1px;
          height: px2rem(100px);
          bottom: 0;
          left: 50%;
          background-color: $color-e9;
          transform: translate(-50%, 0);
          z-index: 11;
        }
        &:active{
          background-color: #ff2d55;
          color: $color-white;
        }
      }
    }
  }
}
</style>
<style lang='scss'>
 @import '../../../scss/common/_mixin.scss';
.Y-input.mesg-input {
  height: auto;
  .content {
    line-height: px2rem(30px);      
    font-size: px2rem(26px);
    height: px2rem(30px); 
    padding: 0 px2rem(40px);
    margin-bottom: px2rem(40px);
  }
 .clear-icon{
    top: 0;
  }
}
    
</style>
