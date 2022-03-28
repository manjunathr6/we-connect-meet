import React from "react";
import Paragraph from "../text/Paragraph";

function ActionBackgroundItem(props) {
  return (
    <li className="text-center">
      <div className="img-wrapper">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <Paragraph text={props.item.name} />
    </li>
  );
}
export default ActionBackgroundItem;
