# ok-ui

>本组件库仅供学习交流，请勿在生产环境中使用

## 安装
```
npm i @phoebe0626/ok-ui
```
## 使用
```javascript
import Vue from 'vue'
import App from 'components/app.vue'
import OkUI from '@phoebe0626/ok-ui';
Vue.use(OkUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 特别提示
样式文件需要单独引入
```javascript
import '@phoebe0626/ok-ui/dist/ok-ui.css'
```
