## Dialog 对话框
<font size="2" color="#5e6d82">在保留当前页面状态的情况下，告知用户并承载相关操作。</font>

<h3>基本用法</h3>

<font size="2" color="#5e6d82">Dialog 弹出一个对话框，适合需要定制性更大的场景。</font>

<dialog-demo-1 />

> 需要设置 `visible` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为`footer` 的 `slot`。`title` 属性用于定义标题，它是可选的，默认值为空。

::: details 点击查看代码
 ```vue
 <template>
  <o-button type="primary" @click="dialogVisible = true">点击打开 Dialog</o-button>

  <o-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <o-button @click="dialogVisible = false">取 消</o-button>
      <o-button type="primary" @click="dialogVisible = false">确 定</o-button>
    </span>
  </o-dialog>
 </template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>
 ```
:::

<h3>自定义内容</h3>

<font size="2" color="#5e6d82">Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Ok Form 组件的样例。</font>

<dialog-demo-2 />

::: details 点击查看代码
 ```vue
 <template>
  <o-button type="primary" @click="dialogVisible = true">点击打开 Dialog</o-button>

  <o-dialog
    title="收货地址"
    :visible.sync="dialogVisible"
    width="30%">
    <o-form :model="form">
      <o-form-item label="收货人">
        <o-input v-model="form.name"></o-input>
      </o-form-item>
      <o-form-item label="收货地址" placeholder="请选择收货地址">
        <o-select v-model="form.address">
          <o-option label="北京" value="beijing"></o-option>
          <o-option label="上海" value="shanghai"></o-option>
        </o-select>
      </o-form-item>
    </o-form-item>
  </o-dialog>
 </template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        address: ''
      }
    };
  }
};
</script>
 ```
:::

<h3>Dialog Events</h3>

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
      <td>visible</td>
      <td>是否显示 Dialog，支持 sync 修饰符</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>Dialog 的标题</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>width</td>
      <td>Dialog 的宽度</td>
      <td>string</td>
      <td>—</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>top</td>
      <td>Dialog CSS 中的 margin-top 值</td>
      <td>string</td>
      <td>—</td>
      <td>15vh</td>
    </tr>
  </tbody>
</table>