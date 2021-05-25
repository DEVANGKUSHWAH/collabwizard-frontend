import {createSlice} from "@reduxjs/toolkit";

const initialProfilesState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  profileForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfilesState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;

      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state,action) => {
      state.error = null;


      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },

    profileFetched: (state, action) => {
      const { profileForEdit } = action.payload;
      state.actionsLoading = false;
      state.profileForEdit = profileForEdit
      state.error = null;
    },

    profilesFetched: (state, action) => {
      const { data }  = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = data;
    },

    profileCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.data);
    },

    profileUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = action.payload.data;
    },

    profileDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
