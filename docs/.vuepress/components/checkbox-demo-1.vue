<template>
  <div class="container">
    <div class="source">
      <div class="checkbox-demo-1">
        <component
          :is="Checkbox"
          v-if="Checkbox"
          v-model="checked"
        >备选项</component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
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