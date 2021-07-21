/**
 * login action
 */
//定义行为变量
export const LOGIN = "Login";
//定义行为事件
export const loginAction = (data, callback) => dispatch => {
  dispatch({ type: LOGIN, data: { token: data.token } });
  Storage.put("token", data.ldtoken);
  callback();
}