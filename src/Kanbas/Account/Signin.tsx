import { Link } from "react-router-dom";
import React from "react";

export default function Signup() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" /> <br />
      <input id="wd-password" placeholder="password" type="password" /> <br />
      <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
        Sign in
      </Link>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>


);}
