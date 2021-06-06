## Icon 图标
<font size="2" color="#5e6d82">提供了一套常用的图标集合。</font>

<h3>使用方法</h3>

直接通过设置类名为 `o-icon-iconName` 来使用即可。例如：
<ClientOnly>
  <icon-demo></icon-demo>
</ClientOnly>

::: details 点击查看代码
```html
<i class="o-icon-home"></i>
<i class="o-icon-delete"></i>
<i class="o-icon-view"></i>
<i class="o-icon-search"></i>
```
:::



## Button 按钮
<font size="2" color="#5e6d82">常用的操作按钮。</font>

<h3>基础用法</h3>

<font size="2" color="#5e6d82">基础的按钮用法。</font>
<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>
> 使用 `type`、`ghost`、`round`、`cirle` 属性来定义 Button 的样式。
::: details 点击查看代码
```html
<div>
  <o-button>默认按钮</o-button>
  <o-button type="primary">主要按钮</o-button>
  <o-button type="success">成功按钮</o-button>
  <o-button type="info">信息按钮</o-button>
  <o-button type="warning">警告按钮</o-button>
  <o-button type="danger">危险按钮</o-button>
</div>

<div>
  <o-button ghost>默认按钮</o-button>
  <o-button ghost type="primary">主要按钮</o-button>
  <o-button ghost type="success">成功按钮</o-button>
  <o-button ghost type="info">信息按钮</o-button>
  <o-button ghost type="warning">警告按钮</o-button>
  <o-button ghost type="danger">危险按钮</o-button>
</div>

<div>
  <o-button round>默认按钮</o-button>
  <o-button round type="primary">主要按钮</o-button>
  <o-button round type="success">成功按钮</o-button>
  <o-button round type="info">信息按钮</o-button>
  <o-button round type="warning">警告按钮</o-button>
  <o-button round type="danger">危险按钮</o-button>
</div>

<div>
  <o-button icon="o-icon-search" circle></o-button>
  <o-button icon="o-icon-home" circle type="primary"></o-button>
  <o-button icon="o-icon-checked" circle type="success"></o-button>
  <o-button icon="o-icon-refresh" circle type="info"></o-button>
  <o-button icon="o-icon-password" circle type="warning"></o-button>
  <o-button icon="o-icon-delete" circle type="danger"></o-button>
</div>
```
:::

<h3>禁用状态</h3>

<font size="2" color="#5e6d82">按钮不可用状态。</font>
<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>

> 你可以使用 `disabled` 属性来定义按钮是否可用，它接收一个 `Boolean` 值。

::: details 点击查看代码
```html
<el-button disabled>默认按钮</el-button>
<el-button type="primary" disabled>主要按钮</el-button>
<el-button type="success" disabled>成功按钮</el-button>
<el-button type="info" disabled>信息按钮</el-button>
<el-button type="warning" disabled>警告按钮</el-button>
<el-button type="danger" disabled>危险按钮</el-button>

<el-button plain disabled>朴素按钮</el-button>
<el-button type="primary" plain disabled>主要按钮</el-button>
<el-button type="success" plain disabled>成功按钮</el-button>
<el-button type="info" plain disabled>信息按钮</el-button>
<el-button type="warning" plain disabled>警告按钮</el-button>
<el-button type="danger" plain disabled>危险按钮</el-button>
```
:::

<h2>图标按钮</h2>

<ClientOnly>
  <button-demo-3 />
</ClientOnly>

> 设置 `icon` 属性即可，也可以设置在文字右边的 icon，只要使用 `i` 标签即可，可以使用自定义图标。

::: details 点击查看代码
```html
<o-button type="primary" icon="o-icon-home"></o-button>
<o-button type="primary" icon="o-icon-view"></o-button>
<o-button type="primary" icon="o-icon-delete"></o-button>
<o-button type="primary" icon="o-icon-search">搜索</o-button>
<o-button type="primary">刷新<i class="o-icon-refresh"></i></o-button>
```
:::

<h3>Button Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td width="16%">type</td>
      <td width="16%">类型</td>
      <td width="16%">string</td>
      <td>primary / success / warning / danger / info / text</td>
      <td width="16%">default</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用状态</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>ghost</td>
      <td>是否是幽灵按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>round</td>
      <td>是否圆角按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>是否圆形按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>是否圆形按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标类名</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Link 文字链接
<font size="2" color="#5e6d82">文字超链接。</font>

<h3>基础用法</h3>

<font size="2" color="#5e6d82">基础的文字链接用法。</font>

<ClientOnly>
  <link-demo-1 />
</ClientOnly>

::: details 点击查看代码
```html
<o-link href="https://github.com/Phoebe0626/ok-ui" target="_blank">默认链接</o-link>
<o-link type="primary">主要链接</o-link>
<o-link type="success">成功链接</o-link>
<o-link type="warning">警告链接</o-link>
<o-link type="danger">危险链接</o-link>
<o-link type="info">信息链接</o-link>
```
:::

<h3>禁用状态</h3>

<font size="2" color="#5e6d82">文字链接不可用状态。</font>

<ClientOnly>
  <link-demo-2 />
</ClientOnly>

> 设置 `disabled` 属性为 `true` 即可。

::: details 点击查看代码
```html
<o-link disabled>默认链接</o-link>
<o-link disabled type="primary">主要链接</o-link>
<o-link disabled type="success">成功链接</o-link>
<o-link disabled type="warning">警告链接</o-link>
<o-link disabled type="danger">危险链接</o-link>
<o-link disabled type="info">信息链接</o-link>
```
:::

<h3>下划线</h3>

<font size="2" color="#5e6d82">文字链接下划线。</font>

<ClientOnly>
  <link-demo-3 />
</ClientOnly>

> 设置 `underline` 属性为 `false` 即可。

::: details 点击查看代码
```html 
<o-link href="https://github.com/Phoebe0626/ok-ui" target="_blank">默认链接</o-link>
<o-link :underline="false" type="primary">主要链接</o-link>
<o-link :underline="false" type="success">成功链接</o-link>
<o-link :underline="false" type="warning">警告链接</o-link>
<o-link :underline="false" type="danger">危险链接</o-link>
<o-link :underline="false" type="info">信息链接</o-link>
```
:::

<h3>Link Attributes</h3>

<table width="100%">
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td width="16%">type</td>
      <td width="16%">类型</td>
      <td width="16%">string</td>
      <td>primary / success / warning / danger / info / text</td>
      <td width="16%">default</td>
    </tr>
    <tr>
      <td>underline</td>
      <td>是否下划线</td>
      <td>boolean</td>
      <td>—</td>
      <td>true</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用状态</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>href</td>
      <td>原生 href 属性</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>