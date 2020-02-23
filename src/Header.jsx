import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header__header d-flex justify-content-center align-items-center">
        <div className="ml-3">
          <h4 className="font-weight-bold Header__logo">PhotoBrowser</h4>
        </div>
      </div>
    );
  }
}
