import {createSlice} from "@reduxjs/toolkit";

const initialExperiencesState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  experienceForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const experienceSlice = createSlice({
  name: "experiences",
  initialState: initialExperiencesState,
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

    experienceFetched: (state, action) => {
      const { experienceForEdit } = action.payload;
      state.actionsLoading = false;
      state.experienceForEdit = experienceForEdit
      state.error = null;
    },

    experiencesFetched: (state, action) => {
      const { data } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = data;
    },

    experienceCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.data);
    },

    experienceUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },

    experienceDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
