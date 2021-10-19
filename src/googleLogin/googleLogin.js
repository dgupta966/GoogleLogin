import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const GoogleLoginButton = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (res) => {
    console.log(res);
    setName(res.profileObj.name);
    setEmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <p>{name}</p>
      <p>{email}</p>
      <img src={url} alt={name} />
      <GoogleLogin
        clientId="311174857882-sj371jgamoipi6r50c1d6d0r5ps35gbc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleLoginButton;
