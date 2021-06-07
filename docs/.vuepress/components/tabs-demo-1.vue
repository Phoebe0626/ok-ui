<template>
  <div class="container">
    <div class="source">
      <div class="tabs-demo-1">
        <component :is="Tabs" v-if="Tabs && TabPane" v-model="activeName" @tab-click="handleClick">
          <component
            :is="TabPane"
            v-if="TabPane"
            label="用户管理"
            name="first"
          >用户管理</component>
          <component
            :is="TabPane"
            v-if="TabPane"
            label="配置管理"
            name="second"
          >配置管理</component>
          <component
            :is="TabPane"
            v-if="TabPane"
            label="角色管理"
            name="third"
          >角色管理</component>
          <component
            :is="TabPane"
            v-if="TabPane"
            label="定时任务补偿"
            name="fourth"
          >定时任务补偿</component>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      Tabs: null,
      TabPane: null
    }
  },
  mounted () {
    import('../../../packages/tabs/tabs.vue').then(module => {
      this.Tabs = module.default
    })
    import('../../../packages/tabs/tab-pane.vue').then(module => {
      this.TabPane = module.default
    })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>