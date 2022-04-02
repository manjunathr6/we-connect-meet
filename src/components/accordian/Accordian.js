import React, { useContext } from "react";
import arrowDown from "../../assets/arrow-down.svg";
import ActionBackgroundItem from "../backgrounds/ActionBackgroundItem";
import { ContextData, DataInfo, ContextConsumer } from "../context/context";

export default function Accordian(props) {
  const useData = useContext(DataInfo);
  const [configInfo, backgroundImgs, sideNavItems] = [...useData.data];
  console.log(
    "values...",
    useData,
    DataInfo,
    ContextConsumer,
    ContextData.Consumer
  );
  console.log("what are these..", backgroundImgs, useData.data[0].configInfo);

  const backgrounds = backgroundImgs.backgroundImgs.map((item) => {
    return <ActionBackgroundItem key={item.name} item={item} />;
  });
  return (
    <div className="main-nav-section-box">
      <ul className="items-to-edit">
        <li className="available-items p-3 position-relative color-greyBase b-hairline opened">
          <span className="arrow position-absolute right-0 mr-4">
            <img src={arrowDown} alt="arrow down" />
          </span>
          <p className="pb-3">images</p>
          <ul className="d-grid grid-col-2 md-grid-col-3 colGap-3  rowGap-3 color-greyDark">
            {backgrounds}
          </ul>
        </li>
        {/* 
        <li className="available-items p-3 position-relative color-greyBase b-hairline">
          <span className="arrow position-absolute right-0 mr-4">
            <img src={arrowDown} alt="arrow down" />
          </span>
          <p>Solid Colours</p>
        </li>
        <li className="available-items p-3 position-relative color-greyBase b-hairline">
          <span className="arrow position-absolute right-0 mr-4">
            <img src={arrowDown} alt="arrow down" />
          </span>
          <p>Videos</p>
        </li> */}
      </ul>
      hello...
    </div>
  );
}
