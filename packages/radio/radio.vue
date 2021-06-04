<template>
  <label
    class="o-radio"
    :class="{
      'is-checked': label === model,
      'is-disabled': disabled
      }"
    >
    <span class="o-radio__input">
      <span class="o-radio__inner"></span>
      <input
        type="radio"
        class="o-radio__original"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
      >
    </span>
    <span class="o-radio__label">
      <slot><template>{{ label }}</template></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ORadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
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
    isGroup () {
      // 用于判断 radio 组件是否被 radio-group 组件包裹
      return !!this.RadioGroup
    },
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.o-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  .o-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .o-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .o-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      // z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      cursor: pointer;
    }
  }
  .o-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.o-radio.is-checked {
  .o-radio__input {
    .o-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}

.o-radio.is-disabled {
  cursor: not-allowed;
  .o-radio__input {
    .o-radio__inner {
      border-color: #e4e7ed;
      background-color: #f5f7fa;
    }
  }
  .o-radio__original {
    cursor: not-allowed;
  }
}

.o-radio.is-checked.is-disabled {
  cursor: not-allowed;
  .o-radio__input {
    .o-radio__inner {
      border-color: #e4e7ed;
      background-color: #f5f7fa;
      &:after {
        transform: translate(-50%, -50%) scale(1);
        background-color: #c0c4cc;
      }
    }
  }
  .o-radio__original {
    cursor: not-allowed;
  }
}
</style>
