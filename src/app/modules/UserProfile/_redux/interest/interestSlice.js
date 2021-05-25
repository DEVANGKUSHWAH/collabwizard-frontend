import {createSlice} from "@reduxjs/toolkit";

const initialInterestsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  interestForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const interestSlice = createSlice({
  name: "interests",
  initialState: initialInterestsState,
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

    interestFetched: (state, action) => {
      const { interestForEdit } = action.payload;
      state.actionsLoading = false;
      state.interestForEdit = interestForEdit;
      state.error = null;
    },

    interestsFetched: (state, action) => {
      const { interests } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = interests;
    },

    interestCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.data);
    },

    interestUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },

    interestDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
