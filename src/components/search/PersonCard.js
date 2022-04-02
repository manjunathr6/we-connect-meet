import React from "react";

export default function PersonCard(props) {
  const { data } = props;
  return (
    <div className="d-flex">
      <div className="img-wrapper">
        <img src={data.user.profile_image_url} alt={data.user.name} />
      </div>
      <div className="content pl-4">
        <div className="d-flex sub-top color-greyBase f-12 colGap-4">
          <span>{data.user.name}</span>
          <span>{data.created_at}</span>
        </div>
        <p>
          <span>{data.text}</span>
        </p>
      </div>
    </div>
  );
}
