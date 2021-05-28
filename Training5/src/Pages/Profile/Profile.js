import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../../Components/Info/Info";

export default function Profile() {
  // dispatch
  const dispatch = useDispatch();

  // get token
  const user = useSelector((state) => {
    return state.userToken;
  });

  // dispatch to get data
  useEffect(() => {
    console.log("====render====");
    dispatch({ type: "GET_INFO", values: user.token });
  }, []);

  const profile = useSelector((state) => {
    return state.myProfile;
  });

  console.log("profile", profile);

  return (
    <div className="container">
      <Info profile={profile} />
    </div>
  );
}
