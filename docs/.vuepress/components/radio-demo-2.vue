<template>
  <div class="container">
    <div class="source">
      <div class="radio-demo-2">
        <component
          :is="Radio"
          v-if="Radio"
          v-model="radio"
          disabled
          label="禁用">
          备选项  
        </component>
        <component
          :is="Radio"
          v-if="Radio"
          v-model="radio"
          disabled
          label="选中且禁用">
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
      radio: '选中且禁用',
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