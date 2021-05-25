import {createSlice} from "@reduxjs/toolkit";

const initialEducationsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  educationForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const educationSlice = createSlice({
  name: "educations",
  initialState: initialEducationsState,
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

    educationFetched: (state, action) => {
      const { educationForEdit } = action.payload;
      state.actionsLoading = false;
      state.educationForEdit = educationForEdit
      state.error = null;
    },

    educationsFetched: (state, action) => {
      const { data } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = data;
    },

    educationCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.data);
    },

    educationUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },

    educationDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
