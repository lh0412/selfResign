import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "Components/Modal";
import "./home.less";
function Home(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(2222222);
  })
  //关闭事件
  const onClose = () => {
    setVisible(false);
  }
  //显示Modal事件
  const onShow = () => {
    setVisible(true);
  }
  return <div className="home">
    <div className="btn" onClick={onShow}>click me</div>
    <Modal visible={visible} onClose={onClose}>
      <p>Modal内容展示</p>
    </Modal>
    <div className="wrap">
      <div className="ul-wrap">
        <ul className="img-box">
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
          <li>简简单单</li>
        </ul>
        <div className="price">¥8888.8</div>
      </div>
    </div>
  </div>
}
const mapStateToProps = state => ({
  token: state.loginreducer.token
});
export default connect(mapStateToProps)(Home);