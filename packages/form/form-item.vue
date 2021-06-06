<template>
  <div class="o-form-item">
    <label class="o-form-item__label" :style="{width: Form.labelWidth}">{{ label }}</label>
    <div class="o-form-item__content" :style="{marginLeft: Form.labelWidth}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OFormItem',
  inject: {
    Form: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.o-form-item {
  margin-bottom: 22px;
  .o-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0 ;
    box-sizing: border-box;
  }
  .o-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    // overflow: hidden;
    &::before {
      display: table;
      content: "";
    }
  }
}
</style>
