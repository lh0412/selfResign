/***
 * 登录页面
 */
import React, { useState } from "react";
import storage from "Utils/storage";
import { Redirect } from "react-router-dom";
import "./login.less";
export default function Login(props) {
  const [isReadirect, setIsredirect] = useState(false)
  const fnLogin = () => {
    storage.put("token", "token add");
    setIsredirect(true);
  }
  return <div className="login">
    {isReadirect ? <Redirect to={{ pathname: `/` }} /> : <div className="logo" onClick={fnLogin}></div>}

  </div>
}