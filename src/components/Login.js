import NavBar from "./NavBar";
import { useState, useRef, useEffect } from "react";
import app from "./Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Login() {
  const nav = useNavigate();

  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un !== null) {
      nav("/home");
    }
  }, [nav]);

  const rUn = useRef();
  const rPw = useRef();

  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");

  const hUn = (event) => setUn(event.target.value);
  const hPw = (event) => setPw(event.target.value);

  const login = (event) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, un, pw)
      .then((res) => {
        localStorage.setItem("un", un);
        nav("/home"); // Navigate to Home after login
      })
      .catch((err) => setMsg("ERROR: " + err));
  };

  return (
    <>
      <center>
        <NavBar />
        <h1>Login</h1>
        <form onSubmit={login}>
          <input type="email" placeholder="Enter Registered Email" onChange={hUn} ref={rUn} value={un} />
          <br /><br />
          <input type="password" placeholder="Enter Password" onChange={hPw} ref={rPw} value={pw} />
          <br /><br />
          <input type="submit" value="Login" />
        </form>
        <h2>{msg}</h2>
        <br /><br />
      </center>
      <Footer />
    </>
  );
}

export default Login;
