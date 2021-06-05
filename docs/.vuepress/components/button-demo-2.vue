<template>
  <div class="container">
    <div class="source">
      <div class="button-demo-2">
        <div class="row">
          <component disabled v-if="Button" :is="Button">默认按钮</component>
          <component disabled v-if="Button" :is="Button" type="primary">主要按钮</component>
          <component disabled v-if="Button" :is="Button" type="success">成功按钮</component>
          <component disabled v-if="Button" :is="Button" type="info">信息按钮</component>
          <component disabled v-if="Button" :is="Button" type="warning">警告按钮</component>
          <component disabled v-if="Button" :is="Button" type="error">危险按钮</component>
        </div>
        <div class="row">
          <component disabled ghost v-if="Button" :is="Button">默认按钮</component>
          <component disabled ghost v-if="Button" :is="Button" type="primary">主要按钮</component>
          <component disabled ghost v-if="Button" :is="Button" type="success">成功按钮</component>
          <component disabled ghost v-if="Button" :is="Button" type="info">信息按钮</component>
          <component disabled ghost v-if="Button" :is="Button" type="warning">警告按钮</component>
          <component disabled ghost v-if="Button" :is="Button" type="error">危险按钮</component>
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

<style scoped>
.row {
  margin-bottom: 16px;
}
</style>
