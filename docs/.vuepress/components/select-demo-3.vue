<template>
  <div class="container">
    <div class="source">
      <div class="select-demo-3">
        <component
          disabled
          :is="Select"
          v-if="Select && Option"
          v-model="value"
          placeholder="请选择">
          <component
          :is="Option"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </component>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
      value: '',
      Select: null,
      Option: null
    }
  },
  mounted () {
    import ('../../../packages/select/option.vue').then(module => {
      this.Option = module.default
    })
    import ('../../../packages/select/select.vue').then(module => {
      this.Select = module.default
    })
  }
}
</script>