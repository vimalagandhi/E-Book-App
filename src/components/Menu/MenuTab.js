import "./MenuTab.scss";
import React from "react";

function MenuTab(props) {
  const { item, selectedTitle } = props;
  return (
    <>
      <div
        className={item.isOpened ? "cardOnClick" : "card"}
        onClick={() => {
          selectedTitle(item);
        }}
      >
        <h5>{item.title}</h5>
        <hr className="line" />
      </div>
    </>
  );
}

export default MenuTab;
