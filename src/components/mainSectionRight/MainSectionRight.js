import React from "react";
import Accordian from "../accordian/Accordian";
function MainSectionRight(props) {
  return (
    <>
      <nav className="py-5 px-2 options-nav-right">
        {/* Keeping this simple hardcoded. I can use  nested router for this component on each selection arction*/}
        <ul className="editor-nav f-15 d-flex colGap-3 md-colGap-6 color-greyBase">
          <li>
            <span>Actor</span>
          </li>
          <li>
            <span>Voice</span>
          </li>
          <li>
            <span>Alignement</span>
          </li>
          <li className="active color-blueBase fw-regular">
            <span>Background</span>
          </li>
        </ul>
      </nav>
      {/* Here I can use context api to avoid props drilling, but due time concent using props to transfer data down */}
      <Accordian data={props.data} />
    </>
  );
}
export default MainSectionRight;
