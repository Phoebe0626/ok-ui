<template>
  <div class="o-tabs">
    <div class="o-tabs__nav" ref="nav">
      <div
        class="o-tabs__active-line"
        :style="lineStyle"
      ></div>
      <div
        class="o-tabs__item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'is-active': tab.name === value}"
        @click="handleClick(tab.name)"
      >
        <span>{{ tab.label }}</span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'OTabs',
  provide () {
    return {
      Tabs: this
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      barOffset: 0,
      barWidth: 0,
      lineStyle: {},
      tabs: []
    }
  },
  mounted () {
    this.tabs = this.getTabs()
    this.$nextTick(() => {
      this.setLine(this.value)
    })
  },
  methods: {
    setLine (name) {
      const index = this.tabs.findIndex(item => item.name === name)
      const prevTabs = this.$refs.nav.querySelectorAll('.o-tabs__item')
      if (index === 0 || index === prevTabs.length - 1) {
        this.barWidth = prevTabs[index].offsetWidth - 20
      } else {
        this.barWidth = prevTabs[index].offsetWidth - 40
      }

      if (index > 0) {
        let offset = 0
        for (let i = 0; i < index; i++) {
          console.log(index)
          offset += prevTabs[i].offsetWidth
        }
        this.barOffset = offset + 20
      } else {
        this.barOffset = 0
      }
      this.lineStyle = {
        width: this.barWidth + 'px',
        transform: `translateX(${this.barOffset}px)`
      }
    },
    getTabIndex (name) {
      return this.tabs.findIndex(item => item.name === name)
    },
    handleClick (name) {
      this.$emit('tab-click', name)
    },
    getTabs () {
      const AllPanes = this.$children.filter(item => item.$options.name === 'OTabPane')
      const TabPanes = []
      AllPanes.forEach(item => {
        TabPanes.push({
          label: item.label,
          name: item.name
        })
      })
      return TabPanes
    }
  },
  watch: {
    value (newVal) {
      this.setLine(newVal)
    }
  }
}
</script>

<style lang="scss">
.o-tabs {
  box-sizing: border-box;
  position: relative;
  color: #515a6e;
  overflow: hidden;
  .o-tabs__nav {
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #e4e7ed;
      z-index: 1;
    }
    .o-tabs__active-line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #2d8cf0;
      transition: transform .3s cubic-bezier(.645,.045,.355,1);
      list-style: none;
      z-index: 2;
    }
    .o-tabs__item {
      padding: 0 20px;
      height: 40px;
      box-sizing: border-box;
      line-height: 40px;
      display: inline-block;
      list-style: none;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      cursor: pointer;
      &:nth-child(2) {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
      &:hover {
        color: #2d8cf0;
      }
    }
    .o-tabs__item.is-active {
      color: #2d8cf0;
    }
  }
}
</style>
