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
  if(purpose === 'LOG IN'){
    handleClick = handleLogin
  }else if(purpose === 'SIGN UP'){
    handleClick = handleSignUp
  }else if(purpose === 'LOG OUT'){
    handleClick = handleLogout
  }

  return (
    <button className="authButton flex justify-center items-center rounded-full text-white bg-indigo-600 w-32 text-xl font-cutiveMono m-4" onClick={handleClick}>
      {purpose}
    </button>
  );
};

export default AuthButton;