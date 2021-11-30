import React, { useState } from "react";
import GenerateCharges from "./GenerateCharges";

const HomepageBody = () => {
  const [isAboutVisible, setisAboutVisible] = useState(false);

  const onSetSidebarOpen = (open) => {
    console.log('open: ', open)
    setisAboutVisible(open);
    }

  return (
    <div className="HomepageContent">
      <b>Introduction</b> <br /> <br />
      This document will guide you through integrating with opennode and
      demonstrate how to use our product. <br /> <br />
      In addition to these documents you can also find her full information
      about integrating with opennode in our
      <a href="url"> help centre</a>. <br /> <br />
      <b>The doc are organised in four main groups:</b> <br /> <br />
      <b>Charges Collection</b> <br /> <br />
      <div className="Generate">

      <button onClick={()=> setisAboutVisible(true)}>More Info</button>
      {isAboutVisible ? <GenerateCharges open={isAboutVisible} onSetSidebarOpen={onSetSidebarOpen}/> : null }
      <span className="GenerateBody">Generate Charges</span>
        <figure>
          <img className="arrow" src={require("./next.svg")} />
        </figure>
      </div>
    </div>
  );
};

export default HomepageBody;
