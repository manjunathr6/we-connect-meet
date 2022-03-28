import React from "react";
import person from "../../assets/person1.png";
import Button from "../buttons/Button";

function MainSectionLeft() {
  return (
    <div className="flex-1 pt-4">
      <div className="bg-color-greyLight p-4 radius-20">
        <div className="preview-img-container mb-3 position-relative">
          {/* I can make this image a banner component */}
          <img src={person} alt="actor" />
          <Button name="Preview" class="--blueLighter position-absolute" />
        </div>
        <div className="video-script">
          {/* I can make this textarea also a component */}
          <textarea
            name="script-text"
            id="script-text"
            rows="6"
            placeholder="Type or paste your videoscript here. You can also request a translation of 
                      an English script to any of 27 other languages"
            className="radius-20 p-4 pb-9 d-block"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export default MainSectionLeft;
