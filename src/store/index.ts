/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 15:36:34
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 18:23:57
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
