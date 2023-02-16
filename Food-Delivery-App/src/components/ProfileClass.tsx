// import React from "react";

// export default class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {},
//     };
//     console.log("child constructor" + " ");
//   }

//   async componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("namaste react");
//     }, 1000);
//     console.log("child componentDidMount");
//   }

//   componentDidUpdate(): void {
//     console.log("component did update");
//   }

//   componentWillUnmount(): void {
//     clearInterval(this.timer);
//     console.log("component will unmount");
//   }

//   render() {
//     console.log(" child render" + "  ");
//     // const { name } = this.props;
//     // const { count, count2 } = this.state;
//     const { avatar_url, name, location } = this.state.userInfo;
//     return (
//       <div>
//         <h1>Profile Class Component</h1>
//         <img src={avatar_url} />
//         <h2>Name: {name}</h2>
//         <h2>Location: {location}</h2>
//       </div>
//     );
//   }
// }
