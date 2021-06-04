<template>
  <div class="o-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ORadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
