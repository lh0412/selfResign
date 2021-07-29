/***
 * 登录页面
 */
import React, { useState, useEffect } from "react";
import storage from "Utils/storage";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction } from "./action";
import "./login.less";
function Login(props) {
  const [isReadirect, setIsredirect] = useState(props.token || false);

  const fnLogin = async () => {
    await props.loginAction({ token: "data token" }, () => { setIsredirect(true); });
  }
  return <div className="login">
    {isReadirect ? <Redirect to={{ pathname: `/` }} /> : <div className="logo" onClick={fnLogin}></div>}

  </div>
}
const mapStateToProps = state => ({
  token: state.loginreducer.token
})
const mapDispatchToProps = dispatch => ({
  loginAction: bindActionCreators(loginAction, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);