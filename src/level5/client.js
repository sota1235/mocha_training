/**
 * @description APIと通信するためのAPIクライアント
 */

import axios from 'axios';

/**
 * @description ユーザデータを取得
 * @return {Promise}
 */
export const getUsers = () => {
  return axios.get('/users');
}
