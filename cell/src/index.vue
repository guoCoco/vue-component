<template>
  <a class="Y-cell" :href="href">
    <span class="Y-cell-mask" v-if="isLink"></span>
    <div class="Y-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="Y-cell-wrapper">
      <div class="Y-cell-icon" v-if="icon">
        <slot name="icon">
          <i class="Y-icon" :class="icon"></i>
        </slot>
      </div>
      <div class="Y-cell-title">
        
        <slot name="title">
          <span class="Y-cell-text" v-text="title"></span>
          <span v-if="titlelabel" class="Y-cell-label" v-text="titlelabel"></span>
        </slot>
      </div>
      <div class="Y-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span class="Y-cell-vtext" v-text="value"></span>
          <span v-if="valuelabel" class="Y-cell-vlabel" v-text="valuelabel"></span>
        </slot>
      </div>
    </div>
    <div class="Y-cell-right">
      <slot name="right"></slot>
    </div>
    <i v-if="isLink" class="Y-cell-allow-right"></i>
  </a>
</template>

<script>
/**
 * Y-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标
 * @param {string} [title] - 标题
 * @param {string} [titlelabel] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {string} [valuelabel] - 右侧显示描述信息
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <y-cell title="标题文字" icon="back" is-link value="描述文字"></y-cell>
 * <y-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </y-cell>
 */
export default {
  name: 'y-cell',

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    titlelabel: String,
    value: String,
    valuelabel: String,
    isLink: Boolean
  },

  computed: {
    href () {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to)
        if (!resolved.matched.length) return this.to

        this.$nextTick(() => {
          this.added = true
          this.$el.addEventListener('click', this.handleClick)
        })
        return resolved.path
      }
      return this.to
    }
  },

  methods: {
    handleClick ($event) {
      $event.preventDefault()
      this.$router.push(this.href)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../../../scss/common/_var.scss';
  @import '../../../scss/common/_mixin.scss';  
  .Y-cell {
    background-color: $color-white;
    box-sizing: border-box;
    color: inherit;
    min-height: px2rem(120px);
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    font-size:px2rem(30px);
    color:#464646;

    &:first-child {
      .Y-cell-wrapper {
        background-origin: border-box;
      }
    }

    &:last-child {
      // background-image: linear-gradient(0deg, $color-gray, $color-gray 50%, transparent 50%);
      // background-size: 100% 1px;
      // background-repeat: no-repeat;
      background-position: bottom;
    }

    .Y-cell-wrapper {
      // background-image:linear-gradient(180deg, $color-gray, $color-gray 50%, transparent 50%);
      // background-size: 120% 1px;
      // background-repeat: no-repeat;
      // background-position: top left;
      // background-origin: content-box;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      font-size: px2rem(30px);
      line-height: 1;
      min-height: inherit;
      overflow: hidden;
      padding: 0 px2rem(40px);
      width: 100%;
      border-bottom: 1px solid #e9e9e9;
    }

    .Y-cell-mask {
      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0;
      }

      &:active::after {
        opacity: .1;
      }
    }

    .Y-cell-text {
      vertical-align: middle;
      color: #464646;
    }

    .Y-cell-label {
      color: $font-color-lite;
      display: block;
      font-size: px2rem(26px);
      margin-top: px2rem(12px);
    }

    .Y-cell-vtext {
      vertical-align: middle;
      color:#464646;
    }

    .Y-cell-vlabel {
      color: $font-color-lite;
      display: block;
      font-size: px2rem(26px);
      margin-top: px2rem(12px);
    }

    img {
      vertical-align: middle;
    }

    .Y-icon {
      font-size: px2rem(32px);
    }

    .Y-cell-icon {
      margin-right: px2rem(10px);
    }

    .Y-cell-title {
      flex: 1;
      text-align: left;
    }

    .Y-cell-value {
      color:#464646;

      &.is-link {
        margin-right: px2rem(26px);
      }
    }

    .Y-cell-left {
      position: absolute;
      height: 100%;
      left: 0;
      transform: translate3d(-100%, 0, 0);
    }

    .Y-cell-right {
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      transform: translate3d(100%, 0, 0);
    }

    .Y-cell-allow-right::after {
      border: solid px2rem(4px) $border-color;
      border-bottom-width: 0;
      border-left-width: 0;
      content: " ";
      position: absolute;
      top: 50%;
      right: px2rem(40px);
      width: px2rem(20px);
      height: px2rem(20px);
      transform: translateY(-50%) rotate(45deg);
    }
  }

  /**
   * 含有左边距
   */
  .Y-cell-padding-left {
    padding-left: px2rem(40px);
    .Y-cell-wrapper {
      padding-left: 0;
    }
  }
</style>
