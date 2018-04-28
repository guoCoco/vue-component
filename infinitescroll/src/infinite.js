import Vue from 'vue'

const yInfiniteScroll = Vue.component('y-infinite-scroll', {
  props: {
    size: {
      type: Number,
      required: true
    },
    remain: {
      type: Number,
      required: true
    },
    onScroll: Function
  },

  // an object helping to calculate
  delta: {
    start: 0, // start index
    end: 0, // end index
    total: 0, // all items count
    keeps: 0, // nums of item keeping in real dom
    viewHeight: 0, // container wrapper viewport height
    allPadding: 0, // all padding of not-render-yet doms
    paddingTop: 0 // container wrapper real padding-top
  },

  methods: {
    handleScroll (e) {
      let scrollTop = this.$refs.container.scrollTop

      this.updateZone(scrollTop)

      if (this.onScroll) {
        this.onScroll(e, scrollTop)
      }
    },

    updateZone (offset) {
      let delta = this.$options.delta
      let overs = Math.floor(offset / this.size)

      if (!offset) {
        this.$emit('toTop')
      }

      // need moving items at lease one unit height
      // @todo: consider prolong the zone range size
      let start = overs || 0
      let end = overs ? (overs + delta.keeps) : delta.keeps

      // avoid overflow range
      if (overs + this.remain >= delta.total) {
        end = delta.total
        start = delta.total - delta.keeps
        this.$emit('toBottom')
      }

      delta.end = end
      delta.start = start

      // call component to update items
      this.$forceUpdate()
    },

    filter (slots) {
      let delta = this.$options.delta

      delta.total = slots.length
      delta.paddingTop = this.size * delta.start
      delta.allPadding = this.size * (slots.length - delta.keeps)

      return slots.filter((slot, index) => {
        return index >= delta.start && index <= delta.end
      })
    }
  },

  beforeMount () {
    let remains = this.remain
    let delta = this.$options.delta
    let benchs = Math.round(remains / 2)

    delta.end = remains + benchs
    delta.keeps = remains + benchs
    delta.viewHeight = this.size * remains
  },

  render (createElement) {
    let showList = this.filter(this.$slots.default)
    let { viewHeight, paddingTop, allPadding } = this.$options.delta

    return createElement('div', {
      'ref': 'container',
      'style': {
        'overflow-y': 'auto',
        'height': viewHeight / 75 + 'rem'
      },
      'on': {
        'scroll': this.handleScroll
      }
    }, [
      createElement('div', {
        'style': {
          'padding-top': paddingTop + 'px',
          'padding-bottom': (allPadding - paddingTop) + 'px'
        }
      }, showList)
    ])
  }
})

export default yInfiniteScroll
