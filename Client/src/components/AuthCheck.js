import { withAuthenticationRequired, } from "@auth0/auth0-react";
import React from "react";
import Loading from "./Loading";


const AuthCheck = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <Loading />
      </div>
    ),
  });

  return <Component />;
};

export default AuthCheck;