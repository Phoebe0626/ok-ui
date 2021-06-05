<h3>使用之前</h3>

在使用`Ok-ui`之前，我们假设您已经了解 `Vue` 、`Vue`组件、`Vue`单文件组件的基础知识。

<h3>使用构建工具</h3>

一般在 `webpack` 入口页面 `main.js` 中如下配置：
```js
import Vue from 'vue';
import App from 'components/app.vue';
import OkUI from '@phoebe0626/ok-ui';
import '@phoebe0626/ok-ui/lib/xue-ui.css';
Vue.use(OkUI);
new Vue({
    el: '#app',
    render: h => h(App)
});
```
<h3>特别提醒</h3>

> 注意：样式文件需要单独引入。