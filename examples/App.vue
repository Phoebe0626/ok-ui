<template>
  <div id="app">
    <o-button type="primary">确定</o-button>
    <o-input v-model="input" clearable></o-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
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
