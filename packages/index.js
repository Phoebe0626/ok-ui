import Button from './button/button.vue'
import Checkbox from './checkbox/checkbox.vue'
import CheckboxGroup from './checkbox/checkbox-group.vue'
import Dialog from './dialog/dialog.vue'
import Form from './form/form.vue'
import FormItem from './form/form-item.vue'
import Input from './input/input.vue'
import Link from './link/link.vue'
import Radio from './radio/radio.vue'
import RadioGroup from './radio/radio-group.vue'
import Select from './select/select.vue'
import Option from './select/option.vue'
import Switch from './switch/switch.vue'
import Tabs from './tabs/tabs.vue'
import TabPane from './tabs/tab-pane.vue'
import './fonts/iconfont.css'
const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Form,
  FormItem,
  Input,
  Link,
  Radio,
  RadioGroup,
  Select,
  Option,
  Switch,
  Tabs,
  TabPane
]
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件, 如果是, 就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
