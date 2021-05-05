import "./BookView.scss";
import React, { useState, useContext } from "react";
import MenuTab from "./Menu/MenuTab";
import Footer from "./FooterSection/Footer";
import { EbookContext } from "./Context/context";
import {
  setIsSelected,
  setMenus,
  setSelectedObject
} from "./Context/actions/chat.actions";
import RightPart from "./RightPart";
import AddPage from "./BookAdd";

function BookView() {
  const { state, dispatch } = useContext(EbookContext);
  const { showAdd, isSelected, menus } = state;
  const [text, setText] = useState("");
  const newMenu = [...menus];
  const selectedTitle = val => {
    dispatch(setSelectedObject(val));
    dispatch(setIsSelected(!isSelected));
    const newValues = newMenu.map(item => {
      if (val.updatingTitle === item.title) {
        return { ...item, isOpened: true };
      }
      return { ...item, isOpened: false };
    });
    dispatch(setMenus(newValues));
  };
  localStorage.setItem("localMenu", JSON.stringify(menus));
  let retrievedObject = localStorage.getItem("localMenu");
  console.log("retrievedObject", JSON.parse(retrievedObject));

  return (
    <div className="Layout">
      <div className="bodySection">
        {!showAdd && (
          <>
            <div className="leftSection">
              {menus.map(i => (
                <MenuTab item={i} selectedTitle={selectedTitle} />
              ))}
            </div>
            <RightPart setText={setText} />
          </>
        )}

        {showAdd && <AddPage text={text} setText={setText} />}
      </div>

      <Footer />
    </div>
  );
}

export default BookView;
