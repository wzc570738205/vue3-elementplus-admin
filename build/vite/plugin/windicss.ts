/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 20:07:39
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 20:26:53
 */
import type { Plugin } from 'vite'

import windiCSS from 'vite-plugin-windicss'

export function configWindiCssPlugin(): Plugin[] {
  return windiCSS({
    safelist: 'no-select',
    preflight: {
      enableAll: true
    }
  })
}
