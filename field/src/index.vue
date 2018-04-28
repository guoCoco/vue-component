<template> 
  <div class="Y-field">
  	<span class="label" :style="{width: labelSize}">
      <slot name="label">
        {{ label }}
      </slot> 
    </span>
  	<y-input class="field-input" :size='inputSize'
        :placeholder='placeholder'
        :inputType='inputType'
        :needClear='needClear'
        :maxlength='maxlength'
        v-model='model'
        ref='refInput'></y-input>
        <slot name='rightIcon'></slot>
  </div>
</template>

<script>
import yInput from '../../../components/input/src/index'
export default {
  name: 'y-field',
  data () {
    return {
      model: ''
    }
  },
  watch: {
    model (val) {
      this.$set(this.$refs.refInput, 'model', val)
      this.$emit('input', val)
    }
  },
  created () {
    this.model = this.value
  },
  beforeUpdate () {
    this.model = this.value
  },
  methods: {
  },
  computed: {
    labelSize () {
      return this.labelLength + '%'
    },
    inputSize () {
      let _size
      if (!this.inputLength) {
        _size = 100 - this.labelLength
      } else {
        _size = this.inputLength
      }
      return _size
    }

  },
  components: {
    yInput
  },
  props: {
    label: String,
    labelLength: {
      type: Number,
      default: 20
    },
    inputLength: Number,
    placeholder: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    needClear: {
      type: Boolean,
      default: false
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

<style lang='scss' scoped>
  @import '../../../scss/common/_var.scss';
  @import '../../../scss/common/_mixin.scss';
	.Y-field {
		width: 100%;
		height: px2rem(120px);
    text-align: left;
    clear:both;
    border-bottom: $border-normal;
		.label {
			float: left;
      height: px2rem(120px);
      line-height: px2rem(120px);
      font-size: px2rem(32px);
      text-align: left;
      padding-left: px2rem(30px);
      color: $color-24;
		}
		.field-input {
			float: left;
		} 
	}

</style>
