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

const data = [
  { configInfo: ["Actor", "Voice", "Alignment", "Backgrounds"] },
  {
    backgroundImgs: [
      { image: `${uploadImg}`, name: "Upload", upload: true },
      { image: `${officeImag}`, name: "Office" },
      { image: `${spaceImg}`, name: "Space" },
      { image: `${noiseIMg}`, name: "Noise" },
      { image: `${meetingRoomImg}`, name: "Meeting Room" },
      { image: `${booksImg}`, name: "Books" },
      { image: `${deskImg}`, name: "Desk" },
    ],
  },
  {
    sideNavItems: [
      { icon: `${iconChoose}`, name: "choose" },
      { icon: `${iconVideo}`, name: "Choose Video" },
      { icon: `${iconBrowse}`, name: "Browse" },
    ],
  },
];

export { data };
