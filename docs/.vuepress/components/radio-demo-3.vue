<template>
  <div class="container">
    <div class="source">
      <div class="radio-demo-3">
        <component :is="RadioGroup" v-if="RadioGroup" v-model="radio">
          <component
          :is="Radio"
          v-if="Radio"
          label="3">
          备选项  
        </component>
        <component
          :is="Radio"
          v-if="Radio"
          label="6">
          备选项  
        </component>
        <component
          :is="Radio"
          v-if="Radio"
          label="9">
          备选项  
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
      radio: '3',
      Radio: null,
      RadioGroup: null
    }
  },
  mounted () {
    import('../../../packages/radio/radio.vue').then(module => {
      this.Radio = module.default
    })
    import('../../../packages/radio/radio-group.vue').then(module => {
      this.RadioGroup = module.default
    })
  }
}
</script>