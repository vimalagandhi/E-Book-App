import "./BookView.scss";
import React, { useContext } from "react";
import editIcon from "../icons/editIcon.svg";
import plusIcon from "../icons/plusIcon.jpeg";
import { EbookContext } from "./Context/context";
import {
  setShowAdd,
  setShowEdit,
  setAddTitle,
  setSelectedObject
} from "./Context/actions/chat.actions";

function RightPart(props) {
  const { setText } = props;
  const { state, dispatch } = useContext(EbookContext);
  const { showAdd, selectedObject } = state;
  return (
    <div className="rightSection">
      <div>
        <div className="title">
          <h3>{selectedObject.title || ""}</h3>
          {selectedObject !== "" && (
            <img
              src={editIcon}
              className="edit"
              alt="edit"
              onClick={() => {
                dispatch(setShowAdd(true));
                setText(selectedObject.content);
                dispatch(setShowEdit(true));
              }}
            />
          )}
        </div>
        <p className="content">{selectedObject.content || ""}</p>
      </div>
      {!showAdd && (
        <div className="newPage">
          <span className="add">Add New Page</span>
          <img
            src={plusIcon}
            alt="plus"
            onClick={() => {
              dispatch(setShowAdd(true));
              setText("");
              dispatch(setSelectedObject(""));
              dispatch(setAddTitle(""));
            }}
          />
        </div>
      )}
    </div>
  );
}

export default RightPart;
