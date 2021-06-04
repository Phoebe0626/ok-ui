<template>
  <div class="o-input" :class="{'o-input--suffix': showSuffix}">
    <input
      class="o-input__inner"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="o-input__suffix" v-if="showSuffix">
      <i class="o-input__icon o-icon-close" v-if="clearable && value" @click="clear"></i>
      <i class="o-input__icon o-icon-view" :class="{'o-icon-view-acitve': passwordVisible}" v-if="showPassword" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'OInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  methods: {
    // 密码的显示隐藏
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    // 清空内容
    clear () {
      this.$emit('input', '')
    },
    // 双向绑定 v-model
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
  .o-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .o-input__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
      width: 100%;
      &:focus {
        outline: none;
        border-color: #409eff;
      }
      // 禁用的样式
      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
  .o-input--suffix {
    .o-input__inner {
      padding-right: 30px;
    }
    .o-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      .o-icon-view-acitve {
        color: #409eff;
      }
    }
  }
</style>
