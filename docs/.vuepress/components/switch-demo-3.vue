<template>
  <div class="container">
    <div class="source">
      <div class="switch-demo-3">
        <component
          :is="Switch"
          v-if="Switch"
          v-model="value1"
          disabled></component>
        <component
          :is="Switch"
          v-if="Switch"
          v-model="value2"
          disabled></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: true,
      value2: false,
      Switch: null
    }
  },
  mounted () {
    import('../../../packages/switch/switch.vue').then(module => {
      this.Switch = module.default
    })
  }
}
</script>