<template>
	<div class="Y-input" :style="{ width: inputSize }">
		<input class="content" v-if="inputType=='text'"
    :needClear="needClear"
    :placeholder="placeholder"
    type="text"
    :maxlength="maxlength"
    v-model="model"
    @focus="inputFocus"
    @blur="inputBlur"
		ref="inputValue" />
    <input class="content" v-if="inputType=='number'"
    :needClear="needClear"
    :placeholder="placeholder"
    type="number"
    :maxlength="maxlength"
    v-model="model"
    @focus="inputFocus"
    @blur="inputBlur"
    ref="inputValue" />    
    <input class="content" v-if="inputType=='email'"
    :needClear="needClear"
    :placeholder="placeholder"
    type="email"
    :maxlength="maxlength"
    v-model="model"
    @focus="inputFocus"
    @blur="inputBlur"
    ref="inputValue" /> 
    <input class="content" v-if="inputType=='password'"
    :needClear="needClear"
    :placeholder="placeholder"
    type="password"
    :maxlength="maxlength"
    v-model="model"
    @focus="inputFocus"
    @blur="inputBlur"
    ref="inputValue" />  
    <input class="content" v-if="inputType=='tel'"
    :needClear="needClear"
    :placeholder="placeholder"
    :maxlength="maxlength"
    type="tel"
    v-model="model"
    @focus="inputFocus"
    @blur="inputBlur"
    ref="inputValue" />  
		<y-clearevt class="clear-icon" :disabled="disabled" @click='clear'></y-clearevt>
	</div>
  <!--  :type="type"  
     :value="model"
   @input="updateValue($event.target.value)"  -->
</template>

<script>
import yClearevt from '../../../components/clearevt/src/index'
export default {
  name: 'y-input',
  data () {
    return {
      model: '',
      disabled: false,
      isFocus: false
    }
  },
  computed: {
    inputSize () {
      let size = this.size
      size = size > 0 && size <= 100 ? size : 80
      return size + '%'
    }
  },
  watch: {
    model (val) {
      this.$emit('input', val)
      if (this.needClear) this.disabled = (val !== '' && this.isFocus)
      // this.$emit('on-change', val)
    }
  },
  created () {
    this.model = this.value
  },
  beforeUpdate () {
    this.model = this.value
  },
  components: {
    yClearevt
  },
  methods: {
    inputFocus (event) {
      // setTimeout(function () {
      //   event.target.select()
      // }, 0)
      this.isFocus = true
      if (this.needClear) this.disabled = (this.model !== '' && this.isFocus)
    },
    inputBlur () {
      setTimeout(() => {
        this.isFocus = false
        if (this.needClear) this.disabled = false
      }, 10)
    },
    clear () {
      this.model = ''
    }
  },
  props: {
    size: Number,
    type: {
      type: String,
      default: 'String'
    },
    needClear: {
      type: Boolean,
      default: false
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
    },
    value: {
      default: ''
    }
  }
}
</script>
<style lang=scss scoped>
  @import '../../../scss/common/_var.scss';
  @import '../../../scss/common/_mixin.scss';
	input::-webkit-input-placeholder{
    color: #c7c7c7;
  }
  .Y-input{
    height: px2rem(120px);
    text-align: left;
    position: relative;
    border: none;
    .content {
      border: none;
      width: 100%;
      display: inline-block;
      height: px2rem(45px);
      line-height: px2rem(45px);
      font-size: px2rem(32px);
      padding: px2rem(57px);
      padding-left: px2rem(20px);
    }
    .clear-icon{
      float: right;
      top: px2rem(43px);
      right: px2rem(16px);
      position: absolute;
    }
	}
</style>
