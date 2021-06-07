<template>
  <div class="container">
    <div class="source">
      <div class="dialog-demo-2">
        <component :is="Button" v-if="Button" type="primary" @click="dialogVisible = true">打开嵌套表单的 Dialog</component>
        <component
          :is="Dialog"
          v-if="Dialog"
          title="收货地址"
          :visible.sync="dialogVisible"
          width="30%"
        >
          <component :is="Form" v-if="Form" :model="form">
            <component label="收货人" :is="FormItem" v-if="FormItem">
              <component v-model="form.name" :is="Input" v-if="Input"></component>
            </component>
            <component :is="FormItem" v-if="FormItem" label="收货地址">
              <component v-model="form.address" placeholder="请选择收货地址" :is="Select" v-if="Select">
                <component
                  :is="Option"
                  v-if="Option"
                  label="上海"
                  value="shanghai"></component>
                <component
                  :is="Option"
                  v-if="Option"
                  label="北京"
                  value="beijing"></component>
              </component>
            </component>
          </component>
          <template #footer>
            <component :is="Button" v-if="Button" @click="dialogVisible = false">取消</component>
            <component :is="Button" v-if="Button" type="primary" @click="dialogVisible = false">确定</component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        address: ''
      },
      dialogVisible: false,
      Button: null,
      Dialog: null,
      Form: null,
      FormItem: null,
      Input: null,
      Select: null,
      Option: null,
      Button: null
    }
  },
  mounted () {
    import('../../../packages/button/button.vue').then(module => {
      this.Button = module.default
    })
    import('../../../packages/dialog/dialog.vue').then(module => {
      this.Dialog = module.default
    })
    import('../../../packages/form/form.vue').then(module => {
      this.Form = module.default
    })
    import('../../../packages/form/form-item.vue').then(module => {
      this.FormItem = module.default
    })
    import('../../../packages/input/input.vue').then(module => {
      this.Input = module.default
    })
    import('../../../packages/select/select.vue').then(module => {
      this.Select = module.default
    })
    import('../../../packages/select/option.vue').then(module => {
      this.Option = module.default
    })
    import('../../../packages/button/button.vue').then(module => {
      this.Button = module.default
    })
    import('../../../packages/fonts/iconfont.css')
  }
}
</script>