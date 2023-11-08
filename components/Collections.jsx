import React from "react";
import Image from "next/image";
import Collection1 from "./Collection1";
import Collection2 from "./Collection2";

function Collections() {
  return (
    <div className="py-5 bg-darkBlue">
      <Collection1 />
      <Collection2 />
    </div>
  );
}

export default Collections;
