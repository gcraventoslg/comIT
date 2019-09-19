import React from "react";
import Translate from "react-translate-component";
import { Link } from "react-router-dom";
import "./HeaderPortfolio.css";
//import userFoto from "../../assets/imgs/userFoto.png";

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
        <header className="background-gradient">
          <span id="logoId" onClick={this.onOpenHandler}>
            LOGO
          </span>
          <div
            className={"hamburguer " + (isOpen ? "is-active" : "")}
            onClick={this.onOpenHandler}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <nav className={isOpen ? "active-nav" : ""}>
            <Link to="/my-portfolio">
              <Translate content="myPortfolio" />
            </Link>

            <Link to="/new-portfolio">
              <Translate content="newPortfolio" />
            </Link>

            <div className={isOpen ? "dropdown keepHover" : "dropdown"}>
              <span>Username</span>
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

export default HeaderMyPortfolio;
