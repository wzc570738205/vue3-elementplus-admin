<!--
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 14:38:42
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 21:27:29
-->
<template>
  <div class="login-container">
    <!-- <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item >
        <span class="svg-container">

        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="Username"
        />
      </el-form-item>

      <el-form-item>
        <span class="svg-container">

        </span>
        <el-input
          v-model="loginForm.password"
          type="password"
        />
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >Login</el-button
      >
    </el-form> -->

  <a-form :model="loginForm" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name">
      <a-input v-model:value="loginForm.username" />
    </a-form-item>
    <a-form-item label="Activity form">
      <a-input v-model:value="loginForm.password" type="textarea" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="handleLogin">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue'
import { useUserStore } from '@/store/modules/user'
console.log('useUserStore: ', useUserStore().getNickname)
/* useUserStore().login({
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
*/
const loginForm = reactive({
  username: 'admin',
  password: '111111'
})
const labelCol = { span: 4 }
const wrapperCol = { span: 14 }
const handleLogin = () => {
  console.log('loginForm: ', toRaw(loginForm))
  // $refs.loginForm.validate(valid => {
  //   if (valid) {
  //     loading = true
  //     $store.dispatch('user/login', loginForm)
  //       .then(() => {
  //         $router.push({ path: redirect || '/', query: otherQuery })
  //         loading = false
  //       })
  //       .catch(() => {
  //         loading = false
  //       })
  //   } else {
  //     console.log('error submit!!')
  //     return false
  //   }
  // })
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
