<template>
  <div class="container">
    <div class="source">
      <div class="checkbox-demo-3">
        <component
          :is="CheckboxGroup"
          v-if="CheckboxGroup"
          v-model="checkList"
        >
          <component
            :is="Checkbox"
            v-if="Checkbox"
            label="复选框A">复选框 A</component>
          <component
            :is="Checkbox"
            v-if="Checkbox"
            label="复选框B">复选框 B</component>
          <component
            :is="Checkbox"
            v-if="Checkbox"
            label="复选框C">复选框 C</component>
          <component
            :is="Checkbox"
            v-if="Checkbox"
            label="禁用"
            disabled>禁用</component>
          <component
            :is="Checkbox"
            v-if="Checkbox"
            label="选中且禁用"
            disabled>选中且禁用</component>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkList: ['选中且禁用', '复选框A'],
      Checkbox: null,
      CheckboxGroup: null
    }
  },
  mounted () {
    import ('../../../packages/checkbox/checkbox.vue').then(module => {
      this.Checkbox = module.default
    })
    import ('../../../packages/checkbox/checkbox-group.vue').then(module => {
      this.CheckboxGroup = module.default
    })
  }
}
</script>