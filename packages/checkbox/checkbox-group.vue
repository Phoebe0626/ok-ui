<template>
  <div class="o-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
