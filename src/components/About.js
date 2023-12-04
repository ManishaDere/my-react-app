import React from "react";
import UserClass from "./UserClass";

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
        <UserClass name="Manisha" />
      </div>
    );
  }
}

export default About;
