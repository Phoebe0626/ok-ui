<template>
  <button
    class="o-button"
    :class="[`o-button--${type}`,
      {'is-ghost': ghost},
      {'is-round': round},
      {'is-circle': circle},
      {'is-disabled': disabled}
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容 不显示 span  -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'OButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    ghost: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.o-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  // margin: 0;
  transition: .2s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
// primary
.o-button--primary {
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
  &:hover,
  &:focus {
    background-color: #57a3f3;
    border-color: #57a3f3;
    color: #fff;
  }
}
// success
.o-button--success {
  color: #fff;
  background-color: #19be6b;
  border-color: #19be6b;
  &:hover,
  &:focus {
    background-color: #47cb89;
    border-color: #47cb89;
    color: #fff;
  }
}
// info
.o-button--info {
  color: #fff;
  background-color: #2db7f5;
  border-color: #2db7f5;
  &:hover,c
  &:focus {
    background-color: #57c5f7;
    border-color: #57c5f7;
    color: #fff;
  }
}
// warning
.o-button--warning {
  color: #fff;
  background-color: #ff9900;
  border-color: #ff9900;
  &:hover,
  &:focus {
    background-color: #ffad33;
    border-color: #ffad33;
    color: #fff;
  }
}
// error
.o-button--error {
  color: #fff;
  background-color: #ed4014;
  border-color: #ed4014;
  &:hover,
  &:focus {
    background-color: #f16643;
    border-color: #f16643;
    color: #fff;
  }
}
// 幽灵按钮：将其他按钮的内容反色，背景变为透明，常用在有色背景上
.o-button.is-ghost {
  color: #fff;
  background-color: transparent;
  &:hover,
  &:focus {
    background-color: transparent;
    border-color: #409eff;
    color: #409eff;
  }
}

.o-button--primary.is-ghost {
  color: #2d8cf0;
  &:hover,
  &:focus {
    border-color: inherit;
    background-color: rgba(255, 255, 255, .4);
  }
}
.o-button--success.is-ghost {
  color: #19be6b;
  &:hover,
  &:focus {
    color: #19be6b;
    border-color: #19be6b;
    background-color: rgba(255, 255, 255, .4);
  }
}
.o-button--info.is-ghost {
  color: #2db7f5;
  &:hover,
  &:focus {
    color: #2db7f5;
    border-color: #2db7f5;
    background-color: rgba(255, 255, 255, .4);
  }
}
.o-button--warning.is-ghost {
  color: #ff9900;
  &:hover,
  &:focus {
    color: #ff9900;
    border-color: #ff9900;
    background-color: rgba(255, 255, 255, .4);
  }
}
.o-button--error.is-ghost {
  color: #ed4014;
  &:hover,
  &:focus {
    color: #ed4014;
    border-color: #ed4014;
    background-color: rgba(255, 255, 255, .4);
  }
}

// 圆角按钮
.o-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.o-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 图标和文字添加间隙
.o-button [class*=o-icon-]+span {
  margin-left: 5px;
}

// 禁用普通按钮
.o-button--default.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  &:hover,
  &:focus {
    background-color: #fff;
  }
}
.o-button--primary.is-disabled {
  background-color: #a0cfff;
  border-color: #a0cfff;
  cursor: not-allowed;
}
.o-button--success.is-disabled {
  background-color: #b3e19d;
  border-color: #b3e19d;
  cursor: not-allowed;
}
.o-button--info.is-disabled {
  background-color: #a0cddd;
  border-color: #a0cddd;
  cursor: not-allowed;
}
.o-button--warning.is-disabled {
  background-color: #f3d19e;
  border-color: #f3d19e;
  cursor: not-allowed;
}
.o-button--error.is-disabled {
  background-color: #fab6b6;
  border-color: #fab6b6;
  cursor: not-allowed;
}

// 禁用幽灵按钮
.o-button--default.is-ghost.is-disabled {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
}
.o-button--primary.is-ghost.is-disabled {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.o-button--success.is-ghost.is-disabled {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.o-button--info.is-ghost.is-disabled {
  color: #8cc5fd;
  background-color: #dcf1fd;
  border-color: #d9ecfd;
}
.o-button--warning.is-ghost.is-disabled {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.o-button--error.is-ghost.is-disabled {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

</style>
