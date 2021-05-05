import "./BookView.scss";
import React, { useContext } from "react";
import Yamde from "yamde";
import { EbookContext } from "./Context/context";
import {
  setShowAdd,
  setShowEdit,
  setMenus,
  setAddTitle
} from "./Context/actions/chat.actions";

function BookAdd(props) {
  const { text, setText } = props;
  const { state, dispatch } = useContext(EbookContext);
  const { showEdit, menus, addTitle, selectedObject } = state;
  const newMenu = [...menus];
  const myChangeHandler = event => {
    dispatch(setShowEdit(false));
    dispatch(setAddTitle(event.target.value));
  };

  const updateArray = () => {
    const check = newMenu.map(item => {
      if (selectedObject.id === item.id) {
        return { ...item, title: addTitle, content: text, isOpened: true };
      }
      return { ...item };
    });
    dispatch(setMenus(check));
  };

  return (
    <div className="rightSection">
      <div>
        <div className="addTitle">
          <h4 className="pageTitle">Page Title</h4>
          <input
            className="input"
            type="text"
            id="fname"
            name="fname"
            value={showEdit ? selectedObject.title : addTitle}
            onChange={myChangeHandler}
          ></input>
        </div>
        <div className="yamde">
          <Yamde value={text} handler={setText} theme="light" />
        </div>
        <div className="buttonSection">
          <button
            className="button button1"
            onClick={() => {
              dispatch(setShowEdit(false));
              selectedObject
                ? updateArray()
                : dispatch(
                    setMenus([
                      ...menus,
                      { title: addTitle, content: text, isOpened: false }
                    ])
                  );
            }}
          >
            SAVE PAGE
          </button>
          <button
            className="button button2"
            onClick={() => {
              dispatch(setShowAdd(false));
            }}
          >
            BACK TO BOOK
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookAdd;
