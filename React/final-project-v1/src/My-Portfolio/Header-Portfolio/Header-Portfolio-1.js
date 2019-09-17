import React from "react";
import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import "./Header-Portfolio.css";

class HeaderMyPortfolio extends React.Component {
  render() {
    return (
      <div>
        <header className="background-gradient">
          <span>LOGO</span>

          <div id="menuNoMobile">
            <Link to="/my-portfolio">
              <Translate content="myPortfolio" />
            </Link>
            <Link to="/new-portfolio">
              <Translate content="newPortfolio" />
            </Link>

            <div className="dropdown">
              <span
                onClick="myFunction('myDropdown')"
                className="plusSymbol dropbtn"
              >
                EN +
              </span>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">SP</a>
                <a href="#">PT</a>
              </div>
            </div>
            <div className="dropdown">
              <span
                onClick="myFunction('myDropdown2')"
                className="plusSymbol dropbtn"
              >
                Username +
              </span>
              <img
                src="../imgs/userFoto.png"
                alt=""
                style={{ float: "right", marginLeft: "10px" }}
              />
              <div id="myDropdown2" className="dropdown-content">
                <a href="#">Logout</a>
                <a href="#">Setting</a>
              </div>
            </div>
          </div>

          <div id="menuMobile">
            <div className="dropdown">
              <span
                onClick="myFunction('myDropdown3')"
                className="plusSymbol dropbtn"
              >
                EN +
              </span>
              <div id="myDropdown3" className="dropdown-content">
                <a href="#">SP</a>
                <a href="#">PT</a>
              </div>
            </div>

            <div className="dropdown">
              <span
                onClick="myFunction('myDropdown4')"
                className="plusSymbol dropbtn"
              >
                Username +
              </span>
              <img
                src="../imgs/userFoto.png"
                alt=""
                style={{ float: "right", marginLeft: "10px" }}
              />
              <div id="myDropdown4" className="dropdown-content">
                <a href="#">Logout</a>
                <a href="#">Setting</a>
              </div>
            </div>

            <a
              href="javascript:void(0);"
              className="icon myMobileMenu"
              onClick="showMobileMenu()"
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </header>

        <div id="mobileMenuOptions" className="mobile-submenu dropMblMenu">
          <a href="">My Portfolio</a>
          <a href="">New</a>
        </div>
      </div>
    );
  }
}

export default HeaderMyPortfolio;
