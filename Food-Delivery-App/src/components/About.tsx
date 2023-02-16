import React from "react";
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
        <div className="p-3 space-y-3">
          <h1 className="text-3xl font-semibold">About Us Page</h1>
          {/* <UserContext.Consumer>
            {({ user }) => <h1 className="text-2xl p-2 m-2 ">{user.name}</h1>}
          </UserContext.Consumer> */}
          <h1></h1>
          <p>This is the Namaste React Live Course - Finding the Path</p>
          {/* <ProfileFunctional name="Yash" /> */}
          {/* <ProfileFunctional name="First Child" /> */}
        </div>
      </>
    );
  }
}
