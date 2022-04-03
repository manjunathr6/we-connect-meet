import React, { useState, useEffect } from "react";

const SerachTitle = () => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevCount) => (prevCount === 0 ? 30 : prevCount - 1));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="d-flex items-center justify-between pb-6">
      <p>Serach @Linkedin</p>
      <p>Reloads in {timer}</p>
    </div>
  );
};
export default SerachTitle;
