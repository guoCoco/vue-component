import Vue from 'vue'

const ToastConstructor = Vue.extend(require('./index.vue'))

let ToastInstance = new ToastConstructor({
  el: document.createElement('div')
})

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

ToastConstructor.prototype.close = function () {
  this.visible = false
  this.$el.addEventListener('transitionend', removeDom)
}

let Toast = {
  open: (options = {}) => {
    let instance = ToastInstance
    clearTimeout(instance.timer)
    instance.specificPosition = ''
    let duration = options.duration || 3000
    instance.text = typeof options === 'string' ? text : options.text
    if (options.specificPosition || options.specificPosition === 0) {
      instance.specificPosition = options.specificPosition
      instance.position = 'custom'
    } else {
      instance.position = options.position || 'middle'
    }
    instance.iconClass = options.iconClass || ''
    document.body.appendChild(instance.$el)
    Vue.nextTick(function () {
      instance.visible = true
      instance.$el.removeEventListener('transitionend', removeDom)
      instance.timer = setTimeout(function () {
        instance.close()
      }, duration)
    })
    return instance
  }
}

export default Toast
