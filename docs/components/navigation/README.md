## Tabs 标签页
<font size="2" color="#5e6d82">分隔内容上有关联但属于不同类别的数据集合。</font>

<h3>基础用法</h3>
<font size="2" color="#5e6d82">基础的、简洁的标签页。</font>

<ClientOnly>
  <tabs-demo-1 />
</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <o-tabs v-model="activeName" @tab-click="handleClick">
    <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
    <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
    <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
    <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
  </o-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

```
:::

<h3>Tabs Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="150px">参数</th>
      <th width="150px">说明</th>
      <th width="150px">类型</th>
      <th width="150px">可选值</th>
      <th width="140px">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value / v-model</td>
      <td>绑定值，选中选项卡的 name</td>
      <td>string</td>
      <td>—</td>
      <td>第一个选项卡的 name</td>
    </tr>
  </tbody>
</table>

<h3>Tabs Events</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="200px">事件名称</th>
      <th width="300px">说明</th>
      <th width="240px">回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tab-click</td>
      <td>tab 被选中时触发</td>
      <td>被选中的标签 tab 实例</td>
    </tr>
  </tbody>
</table>

<h3>TabPane Events</h3>

<table width="100%">
  <thead>
    <tr>
      <th width="150px">参数</th>
      <th width="150px">说明</th>
      <th width="150px">类型</th>
      <th width="150px">可选值</th>
      <th width="140px">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>label</td>
      <td>选项卡标题</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>name</td>
      <td>与选项卡绑定值 value 对应的标识符</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>