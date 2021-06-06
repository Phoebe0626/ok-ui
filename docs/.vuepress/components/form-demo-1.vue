<template>
  <div class="container">
    <div class="source">
      <div class="form-demo-1">
        <component
          :is="Form"
          v-if="Form"
          :model="form"
          label-width="80px"
        >
          <component
            :is="FormItem"
            v-if="FormItem"
            label="活动名称"
          >
            <component :is="Input" v-if="Input" v-model="form.name"></component>
          </component>
          <component
            :is="FormItem"
            v-if="FormItem"
            label="活动区域"
          >
            <component v-if="Select" :is="Select" v-model="form.region" placeholder="请选择活动区域">
              <component label="区域一" value="shanghai" :is="Option" v-if="Option"></component>
              <component label="区域二" value="beijing" :is="Option" v-if="Option"></component>
            </component>
          </component>
          <component
            :is="FormItem"
            v-if="FormItem"
            label="即时配送"
          >
            <component :is="Switch" v-if="Switch" v-model="form.delivery"></component>
          </component>
          <component
            :is="FormItem"
            v-if="FormItem"
            label="特殊资源"
          >
            <component :is="CheckboxGroup" v-if="CheckboxGroup" v-model="form.type">
              <component
                :is="Checkbox"
                v-if="Checkbox"
                label="美食 / 餐厅线上活动"
                name="type"></component>
              <component
                :is="Checkbox"
                v-if="Checkbox"
                label="地推活动"
                name="type"></component>
              <component
                :is="Checkbox"
                v-if="Checkbox"
                label="线下主题活动"
                name="type"></component>
              <component
                :is="Checkbox"
                v-if="Checkbox"
                label="单纯品牌曝光"
                name="type"></component>
            </component>
          </component>
          <component
            :is="FormItem"
            v-if="FormItem"
            label="特殊资源"
          >
            <component :is="RadioGroup" v-if="RadioGroup" v-model="form.resource">
              <component
                :is="Radio"
                v-if="Radio"
                label="线上品牌商赞助"></component>
              <component
                :is="Radio"
                v-if="Radio"
                label="线下场地免费"></component>
            </component>
          </component>
          <component
            :is="FormItem"
            v-if="FormItem"
          >
            <component :is="Button" v-if="Button" type="primary" @click="onSubmit">立即创建</component>
            <component :is="Button" v-if="Button">取消</component>
          </component>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        delivery: false,
        type: [],
        resource: ''
      },
      Button: null,
      Radio: null,
      RadioGroup: null,
      Checkbox: null,
      CheckboxGroup: null,
      Switch: null,
      Option: null,
      Select: null,
      Input: null,
      Form: null,
      FormItem: null
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  },
  mounted () {
    import('../../../packages/form/form.vue').then(module => {
      this.Form = module.default
    })
    import('../../../packages/form/form-item.vue').then(module => {
      this.FormItem = module.default
    })
    import('../../../packages/input/input.vue').then(module => {
      this.Input = module.default
    })
    import('../../../packages/select/option.vue').then(module => {
      this.Option = module.default
    })
    import('../../../packages/select/select.vue').then(module => {
      this.Select = module.default
    })
    import('../../../packages/switch/switch.vue').then(module => {
      this.Switch = module.default
    })
    import('../../../packages/checkbox/checkbox-group.vue').then(module => {
      this.CheckboxGroup = module.default
    })
    import('../../../packages/checkbox/checkbox.vue').then(module => {
      this.Checkbox = module.default
    })
    import('../../../packages/radio/radio-group.vue').then(module => {
      this.RadioGroup = module.default
    })
    import('../../../packages/radio/radio.vue').then(module => {
      this.Radio = module.default
    })
    import('../../../packages/button/button.vue').then(module => {
      this.Button = module.default
    })
  }
}
</script>