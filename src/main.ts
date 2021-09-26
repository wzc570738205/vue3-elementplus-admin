/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 09:37:04
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 18:23:28
 */

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { router } from '@/router'

import { setupStore } from '@/store'

const app = createApp(App)
setupStore(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
