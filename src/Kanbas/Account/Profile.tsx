import { Link } from "react-router-dom";
import React from "react";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="col-24">
      <h3>Profile</h3>

      <input id="wd-username" placeholder="alice"
             className="form-control mb-2 full-width"/>

      <input id="wd-password" placeholder="password"
             className="form-control mb-2"/>

      <input id="wd-firstname" placeholder="First name"
             className="form-control mb-2"/>

      <input id="wd-lastname" placeholder="Last name"
             className="form-control mb-2"/>


      <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
      <input id="wd-email" placeholder="alice@email.com"
             className="form-control mb-2"/>

      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
    </div>
);}
