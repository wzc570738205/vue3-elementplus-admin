<!--
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 14:38:42
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 18:29:16
-->
<script setup lang="ts">
import { ref } from 'vue-demi'
import { useUserStore } from '@/store/modules/user'
console.log('useUserStore: ', useUserStore().getNickname)
useUserStore().login({
  username: 'admin',
  password:
    'aM5b6sB4bqNlY+0wjFVnR+idNMIZDJaaw+W8ixQ380FJezgX0CLDyx5qzOZmmYJckSvJiWNaj6UCjbkRxSBPclBYkOrdRz7s65LPXKHnRZfDscyefIkFZpSjs7eQVUq38ln7z1N2SaogypPQwqZmr9h643qLIZgYuwDwQ6AFcUQ='
})
const token = useUserStore().getToken
const number = ref(1)
number.value++

const add = () => {
  number.value++
}
</script>

<template>
  <p class="py-8px">
    {{ token }}
    {{ number }}
    <el-button @click="add">asdasd</el-button>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
