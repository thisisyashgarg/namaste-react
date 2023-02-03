import React from "react";
import ProfileFunctional from "./Profile";
import { UserContext } from "../utils/UserContext";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  async componentDidMount() {
    //api call
    // console.log(" parent comp did mount");
  }

  render() {
    // console.log(" parent render");

    return (
      <>
        <div>
          <h1>About Us Page</h1>
          <UserContext.Consumer>
            {({ user }) => <h1 className="text-2xl p-2 m-2 ">{user.name}</h1>}
          </UserContext.Consumer>
          <h1></h1>
          <p>This is the Namaste React Live Course - Finding the Path</p>
          {/* <ProfileFunctional name="Yash" /> */}
          <ProfileFunctional name="First Child" />
        </div>
      </>
    );
  }
}
