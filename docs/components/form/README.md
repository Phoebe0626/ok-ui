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



## Checkbox 复选框

## Select 选择器

## Switch 开关

## Form 表单