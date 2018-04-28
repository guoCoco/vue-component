import Toast from './toast/src/index'
import Button from './button/src/index'
import Input from './input/src/index'
import Search from './search/src/index'
import Toggle from './toggle/src/index'
import IndexList from './indexlist/src/index'
import IndexSection from './indexsection/src/index'
import Header from './header/src/index'
import Cell from './cell/src/index'
import Cellswipe from './cellswipe/src/index'
import Field from './field/src/index'
import Indicator from './indicator/src/index'
import Spinner from './spinner/src/index'
import Loadmore from './loadmore/src/index'
import Picker from './picker/src/picker'
import Datetimepicker from './datetimepicker/index'
import Messagebox from './messagebox/src/index'
import Actionsheet from './actionsheet/src/index'
import Swipe from './swipe/src/index'
import Swipeitem from './swipe/src/swipeitem'
import Lazyload from './lazyload/src/index'
import Infinite from './infinitescroll/src/infinite.js'
import Navbar from './navbar/src/index'
import Tabbar from './tabbar/src/index'
import TabItem from './tabitem/src/index'
import Template from './template/src/index.vue'

const install = function (Vue, options) {
  Vue.$Toast = Vue.prototype.$Toast = Toast
  Vue.$Indicator = Vue.prototype.$Indicator = Indicator
  Vue.$Messagebox = Vue.prototype.$Messagebox = Messagebox
  Vue.$Actionsheet = Vue.prototype.$Actionsheet = Actionsheet
  Vue.component(Button.name, Button)
  Vue.component(Cell.name, Cell)
  Vue.component(Cellswipe.name, Cellswipe)
  Vue.component(Field.name, Field)
  Vue.component(Header.name, Header)
  Vue.component(IndexList.name, IndexList)
  Vue.component(IndexSection.name, IndexSection)
  Vue.component(Input.name, Input)
  Vue.component(Search.name, Search)
  Vue.component(Toggle.name, Toggle)
  Vue.component(Spinner.name, Spinner)
  Vue.component(Loadmore.name, Loadmore)
  Vue.component(Picker.name, Picker)
  Vue.component(Datetimepicker.name, Datetimepicker)
  Vue.component(Swipe.name, Swipe)
  Vue.component(Swipeitem.name, Swipeitem)
  Vue.component(Infinite.name, Infinite)
  Vue.component(Lazyload.name, Lazyload)
  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(Template.name, Template)
}

export default {
  install
}
