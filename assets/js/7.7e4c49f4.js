(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{334:function(t,e,i){},372:function(t,e,i){"use strict";i(334)},419:function(t,e,i){"use strict";i.r(e);var s={name:"OSwitch",props:{value:{type:Boolean,default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},name:{type:String,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},disabled:{type:Boolean,default:!1}},mounted:function(){this.setColor()},methods:{setColor:function(){if(this.activeColor||this.inactiveColor){var t=this.value?this.activeColor:this.inactiveColor;this.$refs.core.style.borderColor=t,this.$refs.core.style.backgroundColor=t}},handleSwitch:function(){var t=this;this.$emit("input",!this.value),this.$nextTick((function(){t.setColor()}))}}},a=(i(372),i(38)),l=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"o-switch",class:{"is-checked":t.value,"is-disabled":t.disabled}},[i("span",{staticClass:"o-switch__label o-switch__label--left",class:{"is-active":!t.value}},[t._v(t._s(t.activeText))]),t._v(" "),i("span",{ref:"core",staticClass:"o-switch__core"},[i("div",{staticClass:"o-switch__button"})]),t._v(" "),i("input",{staticClass:"o-switch__input",attrs:{disabled:t.disabled,type:"checkbox",name:t.name},on:{change:t.handleSwitch}}),t._v(" "),i("span",{staticClass:"o-switch__label o-switch__label--right",class:{"is-active":t.value}},[t._v(t._s(t.inactiveText))])])}),[],!1,null,"5cbd01ec",null);e.default=l.exports}}]);