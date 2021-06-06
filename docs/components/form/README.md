## Input 输入框
<font size="2" color="#5e6d82">通过鼠标或键盘输入字符</font>

<h3>基础用法</h3>

<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

::: details 点击查看代码
```vue
<template>
<o-input v-model="input" placeholder="请输入内容"></o-input>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

<h3>禁用状态</h3>

<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

> 通过 `disabled` 属性指定是否禁用 input 组件

::: details 点击查看代码
```vue
<template>
<o-input
  v-model="input"
  placeholder="请输入内容"
  :disabled="true">
</o-input>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

<h3>可清空</h3>

<ClientOnly>
  <input-demo-3></input-demo-3>
</ClientOnly>

> 通过 `clearable` 属性即可得到一个可清空的输入框

::: details 点击查看代码
```vue
<template>
<o-input
  v-model="input"
  placeholder="请输入内容"
  clearable>
</o-input>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

<h3>密码框</h3>

<ClientOnly>
  <input-demo-4></input-demo-4>
</ClientOnly>

> 通过 `show-password` 属性即可得到一个可切换显示隐藏的密码框

::: details 点击查看代码
```vue
<template>
<o-input
  v-model="input"
  placeholder="请输入内容"
  type="password"
  show-password>
</o-input>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

<h3>Input Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="120">参数</th>
      <th width="140">说明</th>
      <th width="280">类型</th>
      <th width="100">可选值</th>
      <th width="100">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>string</td>
      <td>text, password</td>
      <td>text</td>
    </tr>
    <tr>
      <td>value / v-model</td>
      <td>绑定值</td>
      <td>string / number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>输入框的占位文本</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否可清空</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>show-password</td>
      <td>是否显示切换密码图标</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Radio 单选框
<font size="2" color="#5e6d82">在一组备选项中进行单选</font>

<h3>基础用法</h3>

<font size="2" color="#5e6d82">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</font>

<ClientOnly>
  <radio-demo-1 />
</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <o-radio v-model="radio" label="1">备选项</o-radio>
  <o-radio v-model="radio" label="2">备选项</o-radio>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  }
}
</script>
```
:::

<h3>禁用状态</h3>

<font size="2" color="#5e6d82">单选框不可用的状态。</font>

<ClientOnly>
  <radio-demo-2 />
</ClientOnly>

> 只要在 `o-radio` 元素中设置 `disabled` 属性即可，它接收一个 `Boolean`，`true` 为禁用。

::: details 点击查看代码
```vue
<template>
  <o-radio disabled v-model="radio" label="禁用">备选项</o-radio>
  <o-radio disabled v-model="radio" label="选中且禁用">备选项</o-radio>
</template>

<script>
export default {
  data () {
    return {
      radio: '选中且禁用'
    }
  }
}
</script>
```
:::

<h3>单选框组</h3>

<font size="2" color="#5e6d82">适用于在多个互斥的选项中选择的场景</font>

<ClientOnly>
  <radio-demo-3 />
</ClientOnly>

> 结合 `o-radio-group` 元素和子元素 `o-radio` 可以实现单选组，在 `o-radio-group` 中绑定 `v-model`，在 `o-radio` 中设置好 `label` 即可，无需再给每一个 `o-radio` 绑定变量。

::: details 点击查看代码
```vue
<template>
  <o-radio-group v-model="radio">
    <o-radio label="3">备选项</o-radio>
    <o-radio label="6">备选项</o-radio>
    <o-radio label="9">备选项</o-radio>
  </o-radio-group>
</template>

<script>
export default {
  data () {
    return {
      radio: '3'
    }
  }
}
</script>
```
:::

<h3>Radio Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="100">参数</th>
      <th width="120">说明</th>
      <th>类型</th>
      <th width="100">可选值</th>
      <th width="100">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value / v-model</td>
      <td>绑定值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>label</td>
      <td>Radio 的 value</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
  </tbody>
</table>



## Checkbox 复选框

<font size="2" color="#5e6d82">在一组备选项中进行多选</font>

<h3>基础用法</h3>

<font size="2" color="#5e6d82">单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</font>

<ClientOnly>
  <checkbox-demo-1 />
</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <o-checkbox v-model="checked">备选项</o-checkbox>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
```
:::

<h3>禁用状态</h3>

<font size="2" color="#5e6d82">多选框不可用状态。</font>

<ClientOnly>
  <checkbox-demo-2 />
</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <o-checkbox v-model="checked1" disabled>备选项1</o-checkbox>
  <o-checkbox v-model="checked2" disabled>备选项2</o-checkbox>
</template>

<script>
export default {
  data () {
    return {
      checked1: false
      checked2: true
    }
  }
}
</script>
```
:::

## Select 选择器

## Switch 开关

## Form 表单