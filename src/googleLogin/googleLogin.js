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
        clientId="290084986341-qand35i2fqjhsf55ijd2kigbfhh1qb7t.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleLoginButton;
