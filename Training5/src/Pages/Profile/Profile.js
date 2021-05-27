import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../../Components/Info/Info";

export default function Profile() {
  // dispatch
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.userToken;
  });
  console.log(user);
  useEffect(() => {
    dispatch({ type: "GET_INFO", values: user.token });
  }, []);
  return (
    <div>
      <Info />
    </div>
  );
}
