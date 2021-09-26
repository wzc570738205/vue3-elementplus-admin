/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 11:24:48
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 11:24:48
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
