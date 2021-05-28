import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Info from "../../Components/Info/Info";

export default function Detail(props) {
  const [detail, setDetail] = useState(null);

  const usersList = useSelector((state) => {
    return state.usersList;
  });

  useEffect(() => {
    let { id } = props.match.params;
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
