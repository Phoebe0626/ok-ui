<template>
  <div class="container">
    <div class="source">
      <div class="radio-demo-1">
        <component
          :is="Radio"
          v-if="Radio"
          v-model="radio"
          label="1">
          备选项  
        </component>
        <component
          :is="Radio"
          v-if="Radio"
          v-model="radio"
          label="2">
          备选项  
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      Radio: null
    }
  },
  mounted () {
    import('../../../packages/radio/radio.vue').then(module => {
      this.Radio = module.default
    })
  }
}
</script>