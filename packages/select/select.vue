<template>
  <div class="o-select">
    <div class="o-input" :class="{'is-disabled': disabled}" >
      <input v-model="model" :disabled="disabled" readonly :name="name" type="text" :placeholder="placeholder" class="o-input__inner" @click="isShow = !isShow">
      <span class="o-input__suffix">
        <div class="o-input__suffix-inner">
          <i :class="{'is-reverse': isShow}" class="o-select__caret o-input__icon o-icon-up"></i>
        </div>
      </span>
    </div>
    <transition
      name="default"
      @enter="menuEnter"
      @leave="menuLeave"
      enter-class="default-enter"
      leave-class="default-leave-to"
    >
      <div v-show="isShow" class="o-select-dropdown__wrapper">
        <ul class="o-select-dropdown__list">
          <slot />
        </ul>
        <div class="o-select-dropdown__wrapper-arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'OSelect',
  provide () {
    return {
      Select: this
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: String || Number || Boolean,
    placeholder: {
      type: String,
      default: '请选择'
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      model: ''
    }
  },
  methods: {
    menuEnter (el, done) {
      /* eslint-disable */
      el.offsetWidth
      let height = 0
      this.$children.forEach(item => {
        if (item.$options.name === 'OOption') {
          height += item.$el.offsetHeight
        }
      })
      el.style.maxHeight = height + 12 + 'px'
    },
    menuLeave (el, done) {
      /* eslint-disable */
      el.offsetWidth
      el.style.maxHeight = 0
      el.style.transition = 'all .2s ease-out'
    }
  },
  watch: {
    value (val) {
      this.$children.forEach(item => {
        if (item.value === val) {
          this.model = item.label
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.o-select {
  display: inline-block;
  position: relative;
  width: 240px;
  .o-input {
    display: block;
    position: relative;
    width: 100%;
    &.is-disabled {
      .o-input__inner {
        cursor: not-allowed;
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
      }
    }
    .o-input__inner {
      cursor: pointer;
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
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 240px;
    }
    .o-input__suffix {
      position: absolute;
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      pointer-events: none;
      o-input__suffix-inner {
        pointer-events: all;
      }
      .o-select__caret {
        color: #c0c4cc;
        font-size: 14px;
        transition: transform .3s;
        transform: rotate(180deg);
        cursor: pointer;
        &.is-reverse {
          transform: rotate(0deg);
        }
      }
      .o-input__icon {
        width: 25px;
        line-height: 40px;
        height: 100%;
        text-align: center;
        transition: all .3s;
      }
    }
  }
}

.o-select-dropdown__wrapper {
  position: relative;
  min-width: 240px;
  transform-origin: center top;
  z-index: 2041;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-sizing: border-box;
  margin: 15px 0;
  overflow: hidden;
  .o-select-dropdown__list {
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
  }
  .o-select-dropdown__wrapper-arrow {
    position: absolute;
    top: -12px;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
    &::after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      content: '';
      border-width: 6px;
      top: 2px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #fff;
    }
  }
}

.default-enter-active {
  transition: max-height .2s ease-in;
}
.default-leave-active {
  transition: max-height .2s ease-out;
}
.default-enter, .default-leave-to {
  max-height: 0;
  border-width: 0;
}
</style>
