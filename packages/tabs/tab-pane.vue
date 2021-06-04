<template>
  <div v-show="name === Tabs.value" class="o-tab-pane">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'OTabPane',
  inject: {
    Tabs: {
      default: ''
    }
  },
  props: {
    label: String,
    name: String
  }
}
</script>

<style lang="scss" scoped>
.o-tab-pane {
  display: inline-block;
  .o-tabs__item {
    display: inline-block;
    padding: 0 20px;
  }
}

</style>
