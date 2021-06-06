<template>
  <div id="app">
    <o-button type="primary">确定</o-button>
    <o-input v-model="input" clearable></o-input>
    <o-checkbox v-model="checked1" disabled>备选项1</o-checkbox>
    <o-checkbox v-model="checked2" disabled>备选项2</o-checkbox>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      checked1: false,
      checked2: true,
      input: ''
    }
  }
}
</script>

<style lang="scss">
.o-input {
  width: 180px;
}
</style>
