<template>
  <o-tabs v-model="activeName" @tab-click="handleClick">
    <o-tab-pane label="用户管理" name="first">用户管理</o-tab-pane>
    <o-tab-pane label="配置管理" name="second">配置管理</o-tab-pane>
    <o-tab-pane label="角色管理" name="third">角色管理</o-tab-pane>
    <o-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</o-tab-pane>
  </o-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
