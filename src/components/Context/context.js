import { createContext, useReducer } from "react";
import { initialState } from "./initialState/initialState";
import { eBookReducer } from "./reducers/eBook.reducer";

export const EbookContext = createContext({
  state: initialState,
  dispatch: () => null
});

export const EbookProvider = props => {
  const [state, dispatch] = useReducer(eBookReducer, initialState);
  return (
    <EbookContext.Provider value={{ state, dispatch }}>
      {props.children}
    </EbookContext.Provider>
  );
};
