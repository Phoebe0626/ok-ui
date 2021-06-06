<template>
  <div class="container">
    <div class="source">
      <div class="switch-demo-2">
        <div class="row">
          <component
            :is="Switch"
            v-if="Switch"
            v-model="value1"
            active-text="按月付费"
            inactive-text="按年付费"></component>
        </div>
        <div class="row">
          <component
            :is="Switch"
            v-if="Switch"
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: true,
      value2: true,
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