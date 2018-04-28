import Vue from 'vue'

const IndicatorConstructor = Vue.extend(require('./index.vue'))

let IndicatorInstance = new IndicatorConstructor({
  el: document.createElement('div')
})

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
    // document.querySelector('body').removeChild(event.target)
  }
}

IndicatorConstructor.prototype.close = function () {
  this.visible = false
  document.querySelector('body').style.pointerEvents = 'auto'
  this.$el.addEventListener('transitionend', removeDom)
}

let Indicator = {
  open: (options = {}) => {
    let instance = IndicatorInstance
    instance.text = typeof options === 'string' ? text : options.text
    instance.iconClass = options.iconClass || ''

    document.body.appendChild(instance.$el)
    document.querySelector('body').style.pointerEvents = 'none'
    Vue.nextTick(function () {
      instance.visible = true
      instance.$el.removeEventListener('transitionend', removeDom)
    })
    return instance
  },
  close: () => {
    IndicatorInstance.close()
  }
}

export default Indicator
