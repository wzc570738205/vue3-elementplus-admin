/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 16:48:28
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 16:49:53
 */
declare interface AxiosResponse<T> {
  code: number;
  isSuccess: Boolean;
  message: string;
  data: T;
}
