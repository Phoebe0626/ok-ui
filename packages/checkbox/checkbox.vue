<template>
  <label class="o-checkbox" :class="{'is-checked': isChecked, 'is-disabled': disabled}">
    <span class="o-checkbox__input">
      <span class="o-checkbox__inner" :class="{'is-disabled': disabled}"></span>
      <input
        type="checkbox"
        class="o-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
        :disabled="disabled"
      >
    </span>
    <span class="o-checkbox__label" :class="{'is-disabled': disabled}">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'OCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isChecked () {
      if (this.isGroup) {
        return this.CheckboxGroup.value.some(item => item === this.label)
      } else {
        return !!this.model
      }
    },
    // 判断当前组件是否被 checkbox-group 组件包裹
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.o-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 30px;
  &.is-disabled {
    cursor: not-allowed;
  }
  .o-checkbox__input {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .o-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
      &.is-disabled {
        background-color: #f2f6fc;
        border-color: #dcdfe6;
        cursor: not-allowed;
      }
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .o-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .o-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.o-checkbox.is-checked {
  .o-checkbox__input {
    .o-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
      &.is-disabled {
        background-color: #f2f6fc;
        border-color: #dcdfe6;
        cursor: not-allowed;
        &::after {
          border-color: #c0c4cc;
        }
      }
    }
  }
  .o-checkbox__label {
    color: #409eff;
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>
