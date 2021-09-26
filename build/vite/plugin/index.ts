/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 14:15:34
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 20:25:45
 */
import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'

import PurgeIcons from 'vite-plugin-purge-icons'

import { configHtmlPlugin } from './html'
import { configPwaConfig } from './pwa'
import { configCompressPlugin } from './compress'
import { configStyleImportPlugin } from './styleImport'
import { configWindiCssPlugin } from './windicss'
import { configSvgIconsPlugin } from './svgSprite'
import { configHmrPlugin } from './hmr'

// eslint-disable-next-line no-undef
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
  } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue()
    // have to
  ]

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-windicss
  vitePlugins.push(configWindiCssPlugin())

  // vite-plugin-purge-icons
  vitePlugins.push(PurgeIcons())

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild))

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    )

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv))
  }

  return vitePlugins
}
