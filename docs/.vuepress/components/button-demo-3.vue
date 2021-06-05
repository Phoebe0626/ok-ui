<template>
  <div class="container">
    <div class="source">
      <div class="button-demo-3">
        <component v-if="Button" :is="Button" type="primary" icon="o-icon-home"></component>
        <component v-if="Button" :is="Button" type="primary" icon="o-icon-view"></component>
        <component v-if="Button" :is="Button" type="primary" icon="o-icon-delete"></component>
        <component v-if="Button" :is="Button" type="primary" icon="o-icon-search">搜索</component>
        <component v-if="Button" :is="Button" type="primary">刷新 <i class="o-icon-refresh"></i></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Button: null
    }
  },
  mounted () {
    import('../../../packages/button/button.vue').then(module => {
      this.Button = module.default
    })
  }
}
</script>

