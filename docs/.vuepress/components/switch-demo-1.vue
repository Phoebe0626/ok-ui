<template>
  <div class="container">
    <div class="source">
      <div class="switch-demo-1">
        <component
          :is="Switch"
          v-if="Switch"
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true,
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