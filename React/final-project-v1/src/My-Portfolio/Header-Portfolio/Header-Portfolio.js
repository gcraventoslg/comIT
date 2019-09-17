import React from "react";
import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import "./Header-Portfolio.css";
import userFoto from "../../assets/imgs/userFoto.png";

class HeaderMyPortfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      activeMobileMenu: false,
      navClass: "",
      dropdownClass: "",
      mobileClass: "",
      keepSubMenuClass: ""
    };
    this.handleClickShowMenuMobile = this.handleClickShowMenuMobile.bind(this);
    this.handleCloseActiveMenu = this.handleCloseActiveMenu.bind(this);
    this.handleMouseEnterSubMenu = this.handleMouseEnterSubMenu.bind(this);
    this.handleMouseOutSubMenu = this.handleMouseOutSubMenu.bind(this);
  }

  handleClickShowMenuMobile() {
    this.setState(prevState => {
      console.log(!prevState.activeMobileMenu);
      return {
        activeMobileMenu: !prevState.activeMobileMenu
      };
    });
    console.log(this.state);
    this.addClass();
  }

  addClass() {
    console.log("HI");
    if (this.state.activeMobileMenu) {
      this.setState(prevState => {
        return {
          navClass: prevState.navClass + "active-nav",
          dropdownClass: prevState.dropdownClass + "dropdown-mobile",
          mobileClass: prevState.mobileClass + "is-active"
        };
      });
    } else {
      this.setState({ navClass: "", dropdownClass: "", mobileClass: "" });
    }
    console.log(this.state);
  }
  handleCloseActiveMenu() {
    this.setState({ navClass: "", dropdownClass: "", mobileClass: "" });
  }
  handleMouseEnterSubMenu() {
    this.setState(prevState => {
      return {
        keepSubMenuClass: prevState.keepSubMenuClass + "keepHover"
      };
    });
  }
  handleMouseOutSubMenu() {
    this.setState({ keepSubMenuClass: "" });
  }
  render() {
    return (
      <div>
        <header
          className="background-gradient"
          onMouseLeave={this.handleCloseActiveMenu}
        >
          <span id="logoId" onClick={this.handleCloseActiveMenu}>
            LOGO
          </span>
          <div
            className={"hamburguer " + this.state.mobileClass}
            onClick={this.handleClickShowMenuMobile}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <nav className={this.state.navClass}>
            <Link to="/my-portfolio" onClick={this.handleCloseActiveMenu}>
              <Translate content="myPortfolio" />
            </Link>

            <Link to="/new-portfolio" onClick={this.handleCloseActiveMenu}>
              <Translate content="newPortfolio" />
            </Link>

            <div className={"dropdown " + this.state.keepSubMenuClass}>
              <span>Username</span>
              <div
                className={"dropdown-content " + this.state.dropdownClass}
                id="subMenuUsername"
              >
                <a href="#">Logout</a>
                <a href="#" onClick={this.handleCloseActiveMenu}>
                  Setting
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderMyPortfolio;
