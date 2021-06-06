<template>
  <div id="app">
    <o-button type="primary">确定</o-button>
    <o-input v-model="input" clearable></o-input>
    <o-checkbox v-model="checked1" disabled>备选项1</o-checkbox>
    <o-checkbox v-model="checked2" disabled>备选项2</o-checkbox>
    <o-select v-model="value">
      <o-option label="区域一" value="beijing"></o-option>
      <o-option label="区域二" value="shanghai"></o-option>
    </o-select>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value: '',
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
