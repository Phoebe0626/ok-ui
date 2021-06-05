<template>
  <a
    class="o-link"
    :class="[{
      'is-underline': underline && !disabled,
      'is-disabled': disabled
    }, `o-link--${type}`]"
    :href="href"
    :target="target"
  >
    <span class="o-link--inner">
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: 'OLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    href: String,
    target: {
      type: String,
      default: '_self'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String
  }
}
</script>

<style lang="scss" scoped>
.theme-default-content:not(.custom) a:hover {
  text-decoration: none;
}
.o-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
}
.o-link:link {
  text-decoration: none;
}
.o-link.is-disabled {
  cursor: not-allowed;
}
.o-link.is-underline:hover {
  text-decoration: underline;
}
.o-link--default {
  color: #606266;
}
.o-link--default.is-disabled {
  color: #c0c4cc;
}
.o-link--primary {
  color: #409eff;
}
.o-link--primary.is-disabled {
  color: #a0cfff;
}

.o-link--success {
  color: #67c23a;
  &.is-disabled {
    color: #b3e19d;
  }
}

.o-link--warning {
  color: #e6a23c;
  &.is-disabled {
    color: #f3d19e;
  }
}

.o-link--danger {
  color: #f56c6c;
  &.is-disabled {
    color: #fab6b6;
  }
}

.o-link--info {
  color: #909399;
  &.is-disabled {
    color: #c8c9cc;
  }
}

</style>
