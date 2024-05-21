import React, { useState } from "react";
import ReactHook from "../../../hooks/hook";
import Colour from "../../../hooks/Colour";

const Home = () => {
  const [colour, setColour] = useState("bg-green-50");
  return (
    <div>
      <ReactHook />
      <div className={`${colour} p-20`}>{colour}</div>
      <Colour
        buttonName="change to blue"
        colourChange={() => setColour("bg-blue-500")}
      />

<Colour
        buttonName="change to green"
        colourChange={() => setColour("bg-green-500")}
      />

<Colour
        buttonName="change to red"
        colourChange={() => setColour("bg-red-500")}
      />
      
<Colour
        buttonName="change to yellow"
        colourChange={() => setColour("bg-yellow-500")}
      />
    </div>
  );
};

export default Home;
