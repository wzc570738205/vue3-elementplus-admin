/*
 * @FileDescription:
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-09-26 16:25:56
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-09-26 16:25:57
 */
export interface Response<T> {
  code: number;
  isSuccess: Boolean;
  message: string;
  data: T;
}
