import React from "react";
import Profile from "../userProfile/Profile";

function LeftSideNav(props) {
  const actionItems = props.data.map((item) => {
    return (
      <li key={item.name} className="d-flex align-center justify-center">
        <img src={item.icon} width="34px" alt={item.name} />
      </li>
    );
  });

  return (
    <aside className="side-nav md-h-vh md-py-8 py-3 sm-px-4 d-flex justify-between md-direction-column items-center">
      <nav className="">
        <ul className="d-flex md-direction-column w-100 sm-colGap-3 md-px-4 md-rowGap-4">
          {actionItems}
        </ul>
      </nav>
      {props.login ? "" : <Profile />}
    </aside>
  );
}

export default LeftSideNav;
