/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 09:37:04
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 21:24:17
 */

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import '@/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import { router } from '@/router'

import { setupStore } from '@/store'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
setupStore(app)
app.use(router)

app.config.productionTip = false

app.use(Antd)
// app.use(ElementPlus)
app.mount('#app')
