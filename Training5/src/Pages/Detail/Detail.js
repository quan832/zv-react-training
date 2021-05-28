import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Info from "../../Components/Info/Info";

export default function Detail(props) {
  const [detail, setDetail] = useState(null);

  const usersList = useSelector((state) => {
    return state.usersList;
  });
  let { id } = useParams();
  
  useEffect(() => {
    // action
    setDetail(
      usersList.find((item, index) => {
        return item.id === id;
      })
    );
  });

  return (
    <div className="container">
      <Info profile={detail} />
    </div>
  );
}
