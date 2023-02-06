import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthButton = ({ purpose }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();


  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };
  
  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  let handleClick
  if(purpose === 'Log In'){
    handleClick = handleLogin
  }else if(purpose === 'Sign Up'){
    handleClick = handleSignUp
  }else if(purpose === 'Log Out'){
    handleClick = handleLogout
  }

  return (
    <button className="authButton" onClick={handleClick}>
      {purpose}
    </button>
  );
};

export default AuthButton;