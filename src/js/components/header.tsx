import * as React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="project">
          <i className="logo"></i>
          <h1>Header</h1>
        </div>
        <div className="profile">
          <i className="avatar"></i>
        </div>
      </header>
    );
  }
}

export default Header;
