import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     console.log("in setinterval");
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    return (
      <div>
        <h1>About us Page</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return (
              <div className="font-bold p-2">loggedInUser: {loggedInUser}</div>
            );
          }}
        </UserContext.Consumer>
        <UserClass name="Manisha" />
      </div>
    );
  }
}

export default About;
