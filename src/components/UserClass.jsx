import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ManishaDere");
    const json = await data.json();
    console.log("json data ==>", json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>User Information</h1>
        <img src={avatar_url} alt="user img" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Count: {this.state.count}</h3>
        <>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Count Increase
          </button>
        </>
      </div>
    );
  }
}
