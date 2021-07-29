/**
 * login action
 */
import Storage from "Utils/storage";
//定义行为变量
export const LOGIN = "Login";
export const LOGINOUT = "loginOut";
//定义行为事件
export const loginAction = (data, callback) => async dispatch => {
  dispatch({ type: LOGIN, data: { token: data.token } });
  Storage.put("token", data.token);
  callback();
}
export const loginOutAction = () => async dispatch => {
  dispatch({ type: LOGINOUT });
  Storage.clear();
}