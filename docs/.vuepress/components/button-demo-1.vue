<template>
  <div class="button-demo-1">
    <component v-if="Button" :is="Button" type="success">确定</component>
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
