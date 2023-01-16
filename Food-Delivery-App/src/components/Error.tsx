import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong</h2>
      <p>{`${error}`}</p>
    </div>
  );
}
