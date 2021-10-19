import "./styles.css";
import GoogleLoginButton from "./googleLogin/googleLogin";

export default function App() {
  return (
    <div className="App">
      <h1>Google Login </h1>
      <GoogleLoginButton />
      <div style={{ color: "blue", margin: "100px" }}>@deepakgupta</div>
    </div>
  );
}
