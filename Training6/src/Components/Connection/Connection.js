import React from "react";
import { useNetwork } from "../../module/useNetwork";

export default function Connection() {
  // check connection
  const result = useNetwork();
  console.log(result);
  return (
    <div
      className="wrapper"
      style={{
        margin: "0",
        maxWidth: "225px",
        position: "fixed",
        top: "0",
        right: "0",
      }}
    >
      Connection Status: {"  "}
      <i class="fa fa-circle" style={{ color: "#3DED97" }}></i>
    </div>
  );
}
