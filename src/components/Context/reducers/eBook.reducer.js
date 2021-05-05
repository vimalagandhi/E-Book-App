import { Actions } from "../constants";

export const eBookReducer = (state, action) => {
  switch (action.type) {
    case Actions.SetShowAdd:
      return { ...state, showAdd: action.payload };
    case Actions.SetShowEdit:
      return { ...state, showEdit: action.payload };
    case Actions.SetIsSelected:
      return { ...state, isSelected: action.payload };
    case Actions.SetMenus:
      return { ...state, menus: action.payload };
    case Actions.SetAddTitle:
      return { ...state, addTitle: action.payload };
    case Actions.SetSelectedObject:
      return { ...state, selectedObject: action.payload };
    default:
      return state;
  }
};
