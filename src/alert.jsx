import React from "react";
import ReactDOM from "react-dom";
import "./alert.less";

function Alert({ children, title, onCancel, onOk }) {
  return (
    <div className="alert">
      <div className="mask"></div>
      <div className="body">
        {title && <div className="title">{title}</div>}
        <div className="content">{children}</div>
        <div className="actions">
          <div onClick={onCancel}>取消</div>
          <div onClick={onOk}>确定</div>
        </div>
      </div>
    </div>
  );
}

Alert.show = (title, content) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  function destroy() {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
  }

  function onOk() {
    destroy();
    Alert.show("", "你点击了OK");
  }
  ReactDOM.render(
    <Alert onOk={onOk} onCancel={destroy} title={title}>
      {content}
    </Alert>,
    container
  );
};

export default Alert;
