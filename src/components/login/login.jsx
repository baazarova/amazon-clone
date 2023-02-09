import React, { useState } from "react";
import "./login.css";
import { Link} from "react-router-dom";
import { auth } from "../../firebase";
// import { useHistory } from "react-router-dom";

export const Login = () => {
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

    }

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                
            })
            .catch(error => alert(error.massage))
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="logotip amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button onClick={signIn} type='submit' className="login__signInButton">Sign In</button>
        </form>
        <p>
          By Siging in you agree to AMAZON FAKE CLONE conditions of Use & Sale.
          Please see our privacy notice, our cookies notice, and our interest
          based notice.{" "}
        </p>
        <button onClick={register} className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  );
};
