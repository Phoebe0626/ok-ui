<template>
  <div class="container">
    <div class="source">
      <div class="link-demo-2">
        <component disabled v-if="Link" :is="Link">默认链接</component>
        <component disabled v-if="Link" type="primary" :is="Link">主要链接</component>
        <component disabled v-if="Link" type="success" :is="Link">成功链接</component>
        <component disabled v-if="Link" type="warning" :is="Link">警告链接</component>
        <component disabled v-if="Link" type="danger" :is="Link">危险链接</component>
        <component disabled v-if="Link" type="info" :is="Link">信息链接</component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Link: null
    }
  },
  mounted () {
    import('../../../packages/link/link.vue').then(module => {
      this.Link = module.default
    })
  }
}
</script>