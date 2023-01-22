import React, { useEffect } from "react";
export default function Profile({ name }) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);

    console.log("use effect");

    return () => {
      clearInterval(timer);
      console.log("use effect return");
    };
  });

  console.log("render");

  return (
    <div>
      <h1>Profile Functional Component</h1>
      <h2>Name : {name}</h2>
    </div>
  );
}
