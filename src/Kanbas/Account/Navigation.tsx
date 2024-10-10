import { Link } from "react-router-dom";
import React from "react";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 position-fixed d-flex d-none d-md-block">
      <Link to={`/Kanbas/Account/Signin`}  id="wd-account-signin" className="list-group-item active border border-0"> Signin </Link>
      <Link to={`/Kanbas/Account/Signup`}  id="wd-account-signup"  className="list-group-item text-danger border border-0"> Signup  </Link>
      <Link to={`/Kanbas/Account/Profile`} id="wd-account-profile"  className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
);}