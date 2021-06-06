<template>
  <div class="container">
    <div class="source">
      <div class="button-demo-1">
        <div class="row">
          <component v-if="Button" :is="Button">默认按钮</component>
          <component v-if="Button" :is="Button" type="primary">主要按钮</component>
          <component v-if="Button" :is="Button" type="success">成功按钮</component>
          <component v-if="Button" :is="Button" type="info">信息按钮</component>
          <component v-if="Button" :is="Button" type="warning">警告按钮</component>
          <component v-if="Button" :is="Button" type="error">危险按钮</component>
        </div>
        <div class="row">
          <component v-if="Button" :is="Button" ghost>幽灵按钮</component>
          <component v-if="Button" :is="Button" ghost type="primary">主要按钮</component>
          <component v-if="Button" :is="Button" ghost type="success">成功按钮</component>
          <component v-if="Button" :is="Button" ghost type="info">信息按钮</component>
          <component v-if="Button" :is="Button" ghost type="warning">警告按钮</component>
          <component v-if="Button" :is="Button" ghost type="error">危险按钮</component>
        </div>
        <div class="row">
          <component v-if="Button" round :is="Button">圆角按钮</component>
          <component v-if="Button" round :is="Button" type="primary">主要按钮</component>
          <component v-if="Button" round :is="Button" type="success">成功按钮</component>
          <component v-if="Button" round :is="Button" type="info">信息按钮</component>
          <component v-if="Button" round :is="Button" type="warning">警告按钮</component>
          <component v-if="Button" round :is="Button" type="error">危险按钮</component>
        </div>
        <div class="row">
          <component v-if="Button" circle icon="o-icon-search" :is="Button"></component>
          <component v-if="Button" circle icon="o-icon-home" :is="Button" type="primary"></component>
          <component v-if="Button" circle icon="o-icon-checked" :is="Button" type="success"></component>
          <component v-if="Button" circle icon="o-icon-refresh" :is="Button" type="info"></component>
          <component v-if="Button" circle icon="o-icon-password" :is="Button" type="warning"></component>
          <component v-if="Button" circle icon="o-icon-delete" :is="Button" type="error"></component>
        </div>
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

