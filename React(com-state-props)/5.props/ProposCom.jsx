import React, { useState } from "react";
import FunPro from "./FunPro";
import ClassPro from "./ClassPro";
import PropsDestructuring from "./propsDestructuring";

export default function ProposCom() {
  const [name, setName] = useState("Parth");
  return (
    <div>
      <FunPro name={name} age={20} />
      {/* <FunPro name={"meet"} obj={{ a: 200, b: 30 }} /> */}
      {/* <ClassPro name={"parth"} /> */}
      {/* <PropsDestructuring name={"test"} age={20} /> */}
    </div>
  );
}
