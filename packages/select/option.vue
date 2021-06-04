<template>
  <li
    class="o-select-dropdown__item"
    :class="{
      'selected': value === Select.value,
      'disabled': disabled
    }"
    @click="handleOption"
  >
    {{ label ? label : value }}
  </li>
</template>

<script>
export default {
  name: 'OOption',
  inject: {
    Select: {
      default: ''
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String || Number,
      default: ''
    },
    value: String || Number || Object
  },
  methods: {
    handleOption () {
      // this.Select.value = this.value
      this.Select.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.o-select-dropdown__item {
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #f5f7fa;
  }
  &.selected {
    color: #409eff;
    font-weight: 700;
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
