import React from "react";
import UserClass from "./UserClass";
import { CDN_URL } from "../utils/constant";
import userContext from "../utils/context";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor", CDN_URL);
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");

    console.log(CDN_URL);

    return (
      <div>
        <h1>About Page </h1>

        <userContext.Consumer>
          {({ LoggedinUser }) => <h1>{LoggedinUser}</h1>}
        </userContext.Consumer>

        <UserClass />
      </div>
    );
  }
}

export default About;
