import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    console.log("Child  Constructor");
  }

  componentDidMount() {
    console.log("Child Component DidMount");
    //Api Call
  }

  render() {
    console.log("Child Render");
    return (
      <div className="user-card">
        <h1> Class Component </h1>
        <h2> Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}>
          {" "}
          Increase Count{" "}
        </button>
      </div>
    );
  }
}

export default UserClass;
