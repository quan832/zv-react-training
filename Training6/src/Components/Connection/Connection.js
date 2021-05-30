import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNetwork } from "../../module/useNetwork";

export default function Connection() {
  // check connection
  const network = useNetwork();
  console.log(network);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("dispatch network");
    dispatch({ type: "LISTEN_NETWORK", values: network });
  }, [network]);
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
      {network ? (
        <i class="fa fa-circle" style={{ color: "#3DED97" }}></i>
      ) : (
        <i class="fa fa-circle" style={{ color: "tomato" }}></i>
      )}
    </div>
  );
}
