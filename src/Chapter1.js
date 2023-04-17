import React from "react";

import Lesson1x1 from "./Lesson1x1";
import Lesson1x2 from "./Lesson1x2";
import Lesson1x3 from "./Lesson1x3";
import Lesson1x4 from "./Lesson1x4";


function TitelChapter1() {
  return (
    <div>
      <br />
      <h2>1. Describing the UI</h2>
      <br />
    </div>
  );
}

export default function Chapter1() {
  return (
    <>
      <TitelChapter1 />
      <Lesson1x1 />
      <Lesson1x2 />
      <Lesson1x3 />
      <Lesson1x4 />
    </>
  );
}
