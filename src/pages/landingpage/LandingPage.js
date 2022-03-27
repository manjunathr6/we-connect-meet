import React, { Component } from "react";
import MainSectionRight from "../../components/mainSectionRight/MainSectionRight";
import LeftSideNav from "../../components/left-side-nav/LeftSideNav";
import MainSectionLeft from "../../components/mainSectionLeft/MainSectionLeft";
import Select from "../../components/dropdown/Select";
import Button from "../../components/buttons/Button";

// selecting the local images
import iconChoose from "../../assets/choose.svg";
import iconVideo from "../../assets/video-icon.svg";
import iconBrowse from "../../assets/browse.svg";
import uploadImg from "../../assets/upload.svg";
import officeImag from "../../assets/office.png";
import spaceImg from "../../assets/space.png";
import noiseIMg from "../../assets/noise.png";
import meetingRoomImg from "../../assets/meeting-room.png";
import booksImg from "../../assets/books.png";
import deskImg from "../../assets/desk.png";

class LandingPage extends Component {
  // Just adding the data in state
  state = {
    sideNavItems: [
      { icon: `${iconChoose}`, name: "choose" },
      { icon: `${iconVideo}`, name: "Choose Video" },
      { icon: `${iconBrowse}`, name: "Browse" },
    ],
    backgroundImgs: [
      { image: `${uploadImg}`, name: "Upload" },
      { image: `${officeImag}`, name: "Office" },
      { image: `${spaceImg}`, name: "Space" },
      { image: `${noiseIMg}`, name: "Noise" },
      { image: `${meetingRoomImg}`, name: "Meeting Room" },
      { image: `${booksImg}`, name: "Books" },
      { image: `${deskImg}`, name: "Desk" },
    ],
    dropdowns: ["Saying Hi to my customers", "Saying Hi to my customers2"],
  };

  render() {
    return (
      <div className="container md-d-flex justify-between">
        <LeftSideNav data={this.state.sideNavItems} login={false} />
        <section className="main md-h-vh flex-1 px-5 py-9 scrol-y">
          <div className="md-d-flex justify-between items-center b-hairline pb-4 text-center">
            <div className="sm-mb-3">
              <Select options={this.state.dropdowns} />
            </div>
            <div className="button-wrap">
              <Button class="--grey mr-3" name="Cancel" />
              <Button name="Save" />
            </div>
          </div>
          <div className="md-d-flex md-colGap-4">
            <MainSectionLeft />
            <div className="options-section">
              <MainSectionRight data={this.state.backgroundImgs} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default LandingPage;
