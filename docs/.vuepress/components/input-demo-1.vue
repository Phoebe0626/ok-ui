<template>
  <div class="container">
    <div class="source">
      <div class="input-demo-1">
        <component :is="Input" v-if="Input" v-model="input" placeholder="请输入内容"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      Input: null
    }
  },
  mounted () {
    import('../../../packages/input/input.vue').then(module => {
      this.Input = module.default
    })
  }
}
</script>