import React from "react";
import Translate from "react-translate-component";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import HomePage from "./HomePage";
import listLink from "./LinkNavHome";
import Feature from "./Feature";
import Templates from "./Templates";
import Contact from "./Contact";
/*function Items()
    words = ["Hello", "World", "How are you?"]
    return (
        <ul>
            {words.map(item => <li>{item}</li>)}
        </div>
    )
}*/
function NavComponent() {
  return listLink.map((item, index) => (
    <NavLink
      id={index}
      key={index}
      to={item.to}
      /*onClick={this.handleCLick}*/
      style={item.style}
    >
      {item.title}
    </NavLink>
  ));
}

class Home extends React.Component {
  constructor(match) {
    if (true) {
      console.log(match);
    }
    super();
    this.state = {
      backgroundColor: "#0476D0",
      backgroundImages: "linear-gradient(111deg,#0476D0,#2CEEF0)",
      isOpen: false
    };
  }
  handleCLick = event => {
    const getSelectedLink = listLink.filter((item, index) => {
      console.log(event.target.id);
      return index === parseInt(event.target.id);
    });
    this.setState({
      backgroundColor: getSelectedLink[0].backgroundColor,
      backgroundImages: getSelectedLink[0].backgroundImages
    });
    //this.setState({ call: event.target.id });
  };
  render() {
    const { backgroundColor, backgroundImages, isOpen } = this.state;
    const items = listLink.map((item, index) => (
      <NavLink
        id={index}
        key={index}
        to={item.to}
        onClick={this.handleCLick}
        style={item.style}
      >
        {item.title}
      </NavLink>
    ));

    return (
      <div
        style={{
          ...headerStyle,
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImages
        }}
      >
        {/* <Header /> */}
        <nav id="listNav" style={navStyle}>
          {/*items*/}

          <NavComponent />
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">SignIn</NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/feature" exact component={Feature} />
          <Route path="/templates" exact component={Templates} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        {/*<div>Home</div>
        <Translate content="title" component="h1" className="class" />*/}
      </div>
    );
  }
}

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "30px 40px",
  height: "560px",
  position: "relative",
  width: "auto",
  overflow: "hidden"
};

const navStyle = {
  /*display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: "200px",
  flexWrap: "wrap"*/
  width: "1200px",

  fontFamily: "Roboto",
  fontWeight: "normal",
  fontSize: "18px",
  paddingLeft: "100px"
};

export default Home;
