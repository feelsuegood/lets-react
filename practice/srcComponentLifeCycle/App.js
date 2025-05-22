import React from "react";

//* not return but render
//* back then use React.Component to use 'state' that handles dynamic data (changing data)
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0,
  };
  add = () => {
    // console.log("add");
    // this.setState({ count: this.state.count + 1 });
    this.setState((currentState) => ({ count: currentState.count + 1 }));
  };
  minus = () => {
    // console.log("minus");
    // this.setState({ count: this.state.count - 1 });
    // currentState === this.state
    this.setState((currentState) => ({ count: currentState.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    console.log("i'm rendering");
    return (
      <div>
        <h1>This number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
