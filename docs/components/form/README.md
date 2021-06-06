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

## Checkbox 复选框

## Select 选择器

## Switch 开关

## Form 表单