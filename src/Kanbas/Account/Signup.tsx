import React from "react";
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <div id="wd-signup-screen" className="fs-5">
      <h3>Sign up</h3>
      <input id="wd-username" placeholder="username"
             className="form-control mb-2"/>

      <input id="wd-password" placeholder="password" type="password"
             className="form-control mb-2"/>

      <input id="wd-password" placeholder="Verify password" type="password"
             className="form-control mb-2"/>

      <Link id="wd-signup-link"
            to="/Kanbas/Account/Signup"
            className="btn btn-primary w-100">Sign up</Link>

      <Link id="wd-signin-btn"
            to="/Kanbas/Account/Profile"
            >
            Sign in </Link>
    </div>
);}
