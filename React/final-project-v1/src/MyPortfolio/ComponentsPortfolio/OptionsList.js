import React from "react";
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
    const { activeAction, textTitle, listItems } = this.state;
    console.log(listItems);

    const list = listItems.map(item => <li>{item}</li>);
    //console.log(doubled);
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
export default OptionsList;
