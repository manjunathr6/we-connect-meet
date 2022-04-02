import React from "react";
import { Link, Outlet } from "react-router-dom";
function MainSectionRight(props) {
  const configItems = ["Actor", "Voice", "Alignment", "Backgrounds"];
  const navItems = configItems.map((item) => {
    return (
      <li key={item}>
        <Link to={`/landingpage/${item.toLocaleLowerCase()}`}>{item}</Link>
      </li>
    );
  });
  return (
    <>
      <nav className="py-5 px-2 options-nav-right">
        <ul className="editor-nav f-15 d-flex colGap-3 md-colGap-6 color-greyBase">
          {navItems}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default MainSectionRight;
