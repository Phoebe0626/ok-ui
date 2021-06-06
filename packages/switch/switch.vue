<template>
  <label class="o-switch" :class="{'is-checked': value, 'is-disabled': disabled}">
    <span :class="{'is-active': !value}" class="o-switch__label o-switch__label--left">{{ activeText }}</span>
    <span class="o-switch__core" ref="core">
      <div class="o-switch__button"></div>
    </span>
    <input @change="handleSwitch" :disabled="disabled" class="o-switch__input" type="checkbox" :name="name">
    <span :class="{'is-active': value}" class="o-switch__label o-switch__label--right">{{ inactiveText }}</span>
  </label>
</template>

<script>
export default {
  name: 'OSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
  },
  methods: {
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    handleSwitch () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        this.setColor()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.o-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .o-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .o-switch__label {
    transition: .2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    vertical-align: middle;
    color: #303133;
  }
  .o-switch__label--left {
    margin-right: 10px;
  }
  .o-switch__label--right {
    margin-left: 10px;
  }
  .o-switch__label.is-active {
    color: #409eff;
  }
  .o-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;
    .o-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.o-switch.is-checked {
  .o-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .o-switch__button {
      transform: translateX(20px);
    }
  }
}

.o-switch.is-disabled {
  opacity: .6;
  .o-switch__core {
    cursor: not-allowed;
  }
}
</style>
