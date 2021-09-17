/**
 * hooks 实现Modal公共组件
 * config:modal配置参数
 * content:modal的内容
 */
import React from "react";
import { createPortal } from "react-dom";
import "./modal.less";
const Modal = props => {
  const { visible, onClose, children } = props;
  function handleClick(event) {
    // 点击蒙层本身时关闭模态框，点击模态框的内容时不关闭
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  const modal = createPortal(<div className="modal-wrap">
    <div className="modal">
      <p className="close-btn-wrap" onClick={onClose}>
        <span className="close-btn">X</span>
      </p>
      <div className="content-wrap">
        {children}
      </div>
    </div>
  </div>, document.body)

  return <div className="">{visible && modal}</div>
}
export default Modal;