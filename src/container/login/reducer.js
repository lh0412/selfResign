/**
 * 登陆reducer
 * 首先需要引入行为类型
 */
import { LOGIN, LOGINOUT } from "./action";
const initialState = {
  token: null
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { ...action.data });
    case LOGINOUT:
      return Object.assign({}, state, { token: null })
    default:
      return state;
  }
}
export default loginReducer;