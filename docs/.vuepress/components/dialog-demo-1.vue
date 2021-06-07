<template>
  <div class="container">
    <div class="source">
      <div class="dialog-demo-1">
        <component :is="Button" v-if="Button" type="primary" @click="dialogVisible = true">点击打开 Dialog</component>
        <component
          :is="Dialog"
          v-if="Dialog"
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
        >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <component :is="Button" v-if="Button" @click="dialogVisible = false">取 消</component>
            <component :is="Button" v-if="Button" type="primary" @click="dialogVisible = false">确 定</component>
          </span>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      Button: null,
      Dialog: null
    }
  },
  mounted () {
    import('../../../packages/button/button.vue').then(module => {
      this.Button = module.default
    })
    import('../../../packages/dialog/dialog.vue').then(module => {
      this.Dialog = module.default
    })
  }
}
</script>