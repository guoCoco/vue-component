import Vue from 'vue'
const ActionsheetConstructor = Vue.extend(require('./index.vue'))
let ActionsheetInstance = new ActionsheetConstructor({
  el: document.createElement('div')
})
let removeDom = event => {
  if (event.target.parentNode) {
    // console.log(event.)
    event.target.parentNode.removeChild(event.target)
  }
}
ActionsheetConstructor.prototype.close = function () {
  // this.onAction = false
  this.$el.addEventListener('transitionend', removeDom)
}

let Actionsheet = {
  open: (options = {}) => {
    let instance = ActionsheetInstance
    instance.onAction = true
    instance.isactive = true
    instance.closeOnClickModal = options.closeOnClickModal
    instance.actions = options.actions
    instance.cancelText = options.cancelText
    instance.actionClick = function (e) {
      let arr = options.actions
      for (var i in arr) {
        if (arr[i].name === e.currentTarget.innerHTML) {
          let method = arr[i].method
          method()
        }
      }
    }
    instance.cancel = function (e) {
      instance.closeOnClickModal = false
      options.cancel()
    }
    document.body.appendChild(instance.$el)
    Vue.nextTick(function () {
      instance.$el.removeEventListener('transitionend', removeDom)
    })
    return instance
  },
  close: () => {
    ActionsheetInstance.$el.parentNode.removeChild(ActionsheetInstance.$el)
  }
}
export default Actionsheet
