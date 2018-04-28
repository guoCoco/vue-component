import Vue from 'vue'
import msgboxVue from './index.vue'

let MessageBoxConstructor = Vue.extend(msgboxVue)

let currentMsg, instance
let msgQueue = []

const defaultCallback = action => {
  if (currentMsg.resolve) {
    let $type = currentMsg.options.$type
    if ($type === 'prompt') {
      if (action === 'confirm') {
        currentMsg.resolve({ value: instance.inputValue, action })
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject({ value: instance.inputValue, action })
      }
    } else {
      if (action === 'confirm') {
        currentMsg.resolve(action)
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action)
      }
    }
  }
}

let initInstance = function () {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })

  instance.callback = defaultCallback
}

let showNextMsg = function () {
  if (!instance) {
    initInstance()
  }

  if (!instance.visible || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift()

      let options = currentMsg.options
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      document.body.appendChild(instance.$el)

      Vue.nextTick(() => {
        instance.visible = true
      })
    }
  }
}

let Messagebox = function (options) {
  if (typeof Promise !== 'undefined') {
    return new Promise(function(resolve, reject) { // eslint-disable-line
      msgQueue.push({
        options: options,
        resolve: resolve,
        reject: reject
      })

      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: options
    })

    showNextMsg()
  }
}

Messagebox.setDefaults = function (defaults) {
  Messagebox.defaults = defaults
}

Messagebox.alert = (options = {}) => {
  let instance = initInstance
  instance.title = typeof options === 'string' ? title : options.title
  instance.message = options.message || ''
  instance.confirmButtonText = options.confirmButtonText || '确认'
  instance.confirmButtonColor = options.confirmButtonColor || '#007aff'
  instance.$type = 'alert'
  return Messagebox(instance)
}

Messagebox.confirm = (options = {}) => {
  let instance = initInstance
  instance.title = typeof options === 'string' ? title : options.title
  instance.message = options.message || ''
  instance.confirmButtonText = options.confirmButtonText || '确认'
  instance.cancelButtonText = options.cancelButtonText || '取消'
  instance.confirmButtonColor = options.confirmButtonColor || '#007aff'
  instance.cancelButtonColor = options.cancelButtonColor || '#007aff'
  instance.$type = 'confirm'
  return Messagebox(instance)
}

Messagebox.prompt = (options = {}) => {
  let instance = initInstance
  instance.title = typeof options === 'string' ? title : options.title
  instance.inputType = options.inputType || 'text'
  instance.placeholder = options.placeholder || ''
  instance.confirmButtonText = options.confirmButtonText || '确认'
  instance.cancelButtonText = options.cancelButtonText || '取消'
  instance.inputValue = options.text || ''
  instance.confirmButtonColor = options.confirmButtonColor || '#007aff'
  instance.cancelButtonColor = options.cancelButtonColor || '#007aff'
  instance.$type = 'prompt'
  return Messagebox(instance)
}

Messagebox.close = function () {
  if (!instance) return
  instance.visible = false
  if (instance.$type === 'prompt') {
    instance.$refs.refInput.model = ''
  }
  msgQueue = []
  currentMsg = null
}

export default Messagebox
export { Messagebox }
