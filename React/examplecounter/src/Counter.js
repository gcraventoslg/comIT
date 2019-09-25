import React from "react";

const counterStyles = {
  border: "1px solid pink",
  textAlign: "center",
  marginBottom: "30px",
  paddingTop: "30px",
  height: "80px",
  fontSize: "20px"
};

// const clickHandler = (event) => {
//     console.log('click');
//       console.log(event.target.name);

//     }

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.init || 0,
      counter: 10,
      index: props.index || 1
    };
    // alert(this.state.index) // to check what the index is
  }

  addClickHandler = () => {
    // const {value} = this.state;

    // const newState = {value: value + 1,};
    // this.setState(newState);

    // console.log('click prevented')

    this.setState(prevState => {
      console.log(prevState);

      const { index } = this.state;
      console.log(index);
      return {
        value: prevState.value + index
      };
    });
  };

  subtractClickHandler = () => {
    // const {value} = this.state;
    // const newState = {
    //     value: value - 1,
    // };
    // this.setState(newState);

    this.setState(prevState => {
      console.log(prevState);
      const { index } = this.state;
      console.log(index);
      return {
        value: prevState.value - index
      };
    });
  };

  render() {
    return (
      <div style={counterStyles}>
        <div>{this.state.value}</div>
        <div>{this.state.counter}</div>
        <div>
          <button name="add" onClick={this.addClickHandler}>
            +
          </button>
          <button name="substract" onClick={this.subtractClickHandler}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
