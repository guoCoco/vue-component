<template>
	<div class="Y-search">
    <i class="Y-search_icon"></i>
      <y-input class="search-input" :size='inputSize'
      :placeholder='placeholder'
      :inputType='inputType'
      :needClear='needClear'
      :maxlength='maxlength'        
      v-model='model'
      ref='refInput'@on-change="onChange"></y-input>
      <div class="Y-search_button" v-show="needBut" @click="handleClick" v-text="buttontext"></div>
	</div>
</template>

<script>
import yInput from '../../../components/input/src/index'
export default {
  name: 'y-search',
  data () {
    return {
      disabled: false,
      model: ''
    }
  },
  computed: {
    inputSize () {
      let _size = this.inputLength || ''
      _size = this.needBut && _size === '' ? 70 : 88
      return _size
    },
    needBut () {
      let _needButton = this.needButton
      if (_needButton === true) _needButton = this.buttontext !== ''
      return _needButton
    }
  },
  components: {
    yInput
  },
  watch: {
    model (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    onChange (val) {
      this.$emit('on-change', val)
    }
  },
  props: {
    inputLength: Number,
    needButton: {
      type: Boolean,
      default: false
    },
    buttontext: {
      type: String,
      default: ''
    },
    needClear: {
      type: Boolean,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    maxlength: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='scss' scoped>

	.Y-search{
    height: 1.6rem;
    text-align: left;
    clear: both;
    .Y-search_icon{
      display: inline-block;
      float: left;
      margin: 0.6rem 0.266667rem 0;
      right: auto;
      background: url(../../../assets/img/icon.png) no-repeat -8.013333rem -5.6rem;
      width: 0.6rem;
      height:0.6rem;
      background-size: 9.866667rem 9.866667rem;
    }
      .search-input {
      float: left;
      }
     .Y-search_button{
        height: 0.6rem;
        line-height: 0.6rem;
        width: 1.573333rem;
        text-align: center;
        border-radius: 0.4rem;
        background-color: #ffc501;
        float: right;
        margin-top: 0.5rem; 
        margin-right: 0.266667rem;
      }
  }
</style>
