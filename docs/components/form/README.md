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

<font size="2" color="#5e6d82">在一组备选项中进行多选。</font>

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

> 设置 `diabled` 属性即可。

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

<h3>多选框组</h3>

<font size="2" color="#5e6d82">适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</font>

> `checkbox-group` 元素能把多个 `checkbox` 管理为一组，只需要在 `Group` 中使用 `v-model` 绑定 `Array` 类型的变量即可。el-checkbox` 的 `label` 属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 `checkbox` 按钮后的介绍。`label` 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

<ClientOnly>
  <checkbox-demo-3 />
</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <o-checkbox-group v-model="checkList">
    <o-checkbox label="复选框A">复选框 A</o-checkbox>
    <o-checkbox label="复选框B">复选框 B</o-checkbox>
    <o-checkbox label="复选框C">复选框 C</o-checkbox>
    <o-checkbox label="禁用" disabled>禁用</o-checkbox>
    <o-checkbox label="选中且禁用" disabled>选中且禁用</o-checkbox>
  </o-checkbox-group>
</template>

<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用','复选框A']
    }
  }
}
</script>
```
:::

<h3>Checkbox Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="20%">参数</th>
      <th width="22%">说明</th>
      <th>类型</th>
      <th width="20%">可选值</th>
      <th width="20%">默认值</th>
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
      <td>选中状态的值</td>
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
    <tr>
      <td>name</td>
      <td>原生的 name 属性</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Select 选择器

<font size="2" color="#5e6d82">当选项过多时，使用下拉菜单展示并选择内容。</font>

<h3>基础用法</h3>

<font size="2" color="#5e6d82">适用广泛的基础单选</font>

<ClientOnly>
  <select-demo-1 />
</ClientOnly>

> `v-model` 的值为当前被选中的 `el-option` 的 value 属性值

::: details 点击查看代码
```vue
<template>
  <o-select v-model="value" placeholder="请选择">
    <o-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </o-option>
  </o-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

<h3>有禁用选项</h3>

<font size="2" color="#5e6d82">适用广泛的基础单选</font>

<ClientOnly>
  <select-demo-2 />
</ClientOnly>

> 在 `el-option` 中，设定 `disabled` 值为 `true`，即可禁用该选项

::: details 点击查看代码
```vue
<template>
  <o-select v-model="value" placeholder="请选择">
    <o-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </o-option>
  </o-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

<h3>禁用状态</h3>

<font size="2" color="#5e6d82">选择器不可用状态</font>

<ClientOnly>
  <select-demo-3 />
</ClientOnly>

> 为 `o-select` 设置 `disabled` 属性，则整个选择器不可用

::: details 点击查看代码
```vue
<template>
  <o-select v-model="value" placeholder="请选择" disabled>
    <o-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </o-option>
  </o-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

<h3>Select Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="20%">参数</th>
      <th width="22%">说明</th>
      <th>类型</th>
      <th width="20%">可选值</th>
      <th width="20%">默认值</th>
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
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>name</td>
      <td>select input 的 name 属性</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位符</td>
      <td>string</td>
      <td>—</td>
      <td>请选择</td>
    </tr>
  </tbody>
</table>


## Switch 开关

<font size="2" color="#5e6d82">表示两种相互对立的状态间的切换，多用于触发「开/关」。</font>

<h3>基本用法</h3>

<ClientOnly>
  <switch-demo-1 />
</ClientOnly>

> 绑定 `v-model` 到一个 `Boolean` 类型的变量。可以使用 `active-color` 属性与 `inactive-color` 属性来设置开关的背景色。

::: details 点击查看代码
```vue
<template>
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </el-switch>
<template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```
:::

<h3>文字描述</h3>

<ClientOnly>
  <switch-demo-2 />
</ClientOnly>

> 使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。

::: details 点击查看代码
```vue
<template>
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </el-switch>
<template>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```
:::

<h3>禁用状态</h3>

<ClientOnly>
  <switch-demo-3 />
</ClientOnly>

> 设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

::: details 点击查看代码
```vue
<template>
  <el-switch
    v-model="value1"
    disabled>
  </el-switch>
  <el-switch
    v-model="value2"
    disabled>
  </el-switch>
<template>

<script>
  export default {
    data() {
      return {
        value1: true
        value2: false
      }
    }
  };
</script>
```
:::


## Form 表单