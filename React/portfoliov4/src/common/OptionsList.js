import React from "react";
import { Link } from "react-router-dom";
class OptionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAction: false,
      textTitle: props.textTitle || "",
      listItems: props.listItems || [],
      left: props.left || 0
    };
  }

  handleIsAction = () => {
    this.setState(prevState => ({
      activeAction: !prevState.activeAction
    }));
  };

  render() {
    const { activeAction, textTitle, listItems } = this.state;
    const list = listItems.map((item, index) => <li key={index}>{item}</li>);
    return (
      <ul style={actionSpanText}>
        <li>
          {textTitle}
          <span style={spanActionSymbol} onClick={this.handleIsAction}>
            {activeAction ? " -" : " +"}
          </span>
          <ul
            id="actionItemsList"
            style={activeAction ? subMenuActionStyle : { display: "none" }}
            onMouseLeave={this.handleIsAction}
          >
            {list}
          </ul>
        </li>
      </ul>
    );
  }
}

const actionSpanText = {
  alignSelf: "flex-end",
  padding: "10px 20px",
  fontWeight: "600",
  listStyle: "none"
};
const spanActionSymbol = {
  cursor: "pointer"
};

const subMenuActionStyle = {
  listStyle: "none",
  border: "1px solid #707070",
  background: "#FFFFFF",
  borderRadius: "4px",
  padding: "5px 25px",
  fontWeight: "normal",
  position: "absolute",
  fontSize: "12px",
  textAlign: "left",
  transition: "all 0.3s",
  zIndex: "5"
};
export default OptionsList;
