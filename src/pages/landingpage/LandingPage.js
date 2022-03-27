import React, { Component } from "react";
import { data } from "../../content/data";

// selecting the local images
import iconChoose from "../../assets/choose.svg";
import iconVideo from "../../assets/video-icon.svg";
import iconBrowse from "../../assets/browse.svg";

class LandingPage extends Component {
  render() {
    console.log("data..", data.images);
    return (
      <div>
        <div className="container md-d-flex justify-between">
          <aside className="side-nav md-h-vh md-py-8 py-3 sm-px-4 d-flex justify-between md-direction-column items-center">
            <nav className="">
              <ul className="d-flex md-direction-column w-100 sm-colGap-3 md-px-4 md-rowGap-4">
                <li className="d-flex align-center justify-center">
                  <img src={iconChoose} width="34px" alt="choose" />
                </li>
                <li className="d-flex align-center justify-center active">
                  <img src={iconVideo} width="34px" alt="Video" />
                </li>
                <li className="d-flex align-center justify-center bg-color-blueLighter">
                  <img src={iconBrowse} width="34px" alt="browse more" />
                </li>
              </ul>
            </nav>
            <div className="profile">
              <span className="d-flex justify-center items-center person">
                MR
              </span>
            </div>
          </aside>
          <section className="main md-h-vh flex-1 px-5 py-9">
            <div className="md-d-flex justify-between items-center b-hairline pb-4">
              <select
                name="video type"
                id="dropdown"
                value="select one"
                className="f-18 md-f-22"
              >
                <option value="Saying Hi to my customers">
                  Saying Hi to my customers
                </option>
                <option value="Saying Hi to my customers2">
                  Saying Hi to my customers2
                </option>
              </select>
              <div className="button-wrap button">
                <button className="mr-3 --grey">Cancel</button>
                <button>Save</button>
              </div>
            </div>
            <div className="md-d-flex">
              <div className="flex-1">Preview</div>
              <div className="">Controls</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default LandingPage;
