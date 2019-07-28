import React, { useState, useEffect } from "react"
import { checkSession } from "./src/utils/auth"

const SessionCheck = props => {
  const [loading, stillLoading] = useState(true);
  useEffect(() => {
    checkSession(() => stillLoading(!loading));
  }, []);
  return loading === false && <>{props.children}</>
};

export const wrapRootElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
);
