import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // CAN BE CONTACT,STARRED, SHARED
  },
};
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //toogle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

//Reducer
export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}
