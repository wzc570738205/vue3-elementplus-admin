/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-20 10:06:58
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-27 10:23:06
 */
import type { Plugin } from 'vite';

/**
 * TODO
 * Temporarily solve the Vite circular dependency problem, and wait for a better solution to fix it later. I don't know what problems this writing will bring.
 * @returns
 */

export function configHmrPlugin(): Plugin {
  return {
    name: 'singleHMR',
    handleHotUpdate({ modules, file }) {
      if (file.match(/xml$/)) return [];

      modules.forEach((m) => {
        if (!m.url.match(/\.(css|less|scss)/)) {
          m.importedModules = new Set();
          m.importers = new Set();
        }
      });

      return modules;
    },
  };
}
