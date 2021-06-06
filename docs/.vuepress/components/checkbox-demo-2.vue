<template>
  <div class="container">
    <div class="source">
      <div class="checkbox-demo-1">
        <component
          :is="Checkbox"
          v-if="Checkbox"
          v-model="checked1"
          disabled
        >备选项1</component>
        <component
          :is="Checkbox"
          v-if="Checkbox"
          v-model="checked2"
          disabled
        >备选项2</component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked1: false,
      checked2: true,
      Checkbox: null
    }
  },
  mounted () {
    import ('../../../packages/checkbox/checkbox.vue').then(module => {
      this.Checkbox = module.default
    })
  }
}
</script>