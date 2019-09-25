import React from "react";
//import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import "./HeaderPortfolio.css";

class HeaderMyPortfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  onOpenHandler = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <header id="headerPort" style={headerStyle}>
          <span id="logoId">LOGO</span>
          <div
            className={"hamburguer " + (isOpen ? "is-active" : "")}
            onClick={this.onOpenHandler}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <nav
            id="navPort"
            className={isOpen ? "active-nav" : ""}
            style={navStyle}
          >
            <Link to="/" style={linkNavStyle}>
              My Portfolio
            </Link>
            <Link to="/template-list" style={linkNavStyle}>
              New Portfolio
            </Link>
            <div className={isOpen ? "dropdown keepHover" : "dropdown"}>
              <span style={{ padding: "30px 40px" }}>Username</span>
              <div
                className={
                  isOpen
                    ? "dropdown-content dropdown-mobile"
                    : "dropdown-content"
                }
                id="subMenuUsername"
              >
                <a href="#">Logout</a>
                <a href="#">Setting</a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

const headerStyle = {
  background: "linear-gradient(111deg,#74BDCB,#FFA384)",
  padding: "0px 90px",
  fontFamily: "Roboto, sans-serif",
  color: "white",
  fontSize: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const navStyle = {
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
};

const linkNavStyle = {
  color: "white",
  padding: "30px 40px"
};

export default HeaderMyPortfolio;
