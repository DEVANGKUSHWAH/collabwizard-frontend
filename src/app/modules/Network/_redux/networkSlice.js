import {createSlice} from "@reduxjs/toolkit";

const initialNetworksState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  teachers: null,
  networkForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const networkSlice = createSlice({
  name: "networks",
  initialState: initialNetworksState,
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

    networkFetched: (state, action) => {
      const { networkForEdit } = action.payload;
      state.actionsLoading = false;
      state.networkForEdit = networkForEdit
      state.error = null;
    },

    networksFetched: (state, action) => {
      const { data } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = data;
    },

    teachersFetched: (state, action) => {
        const { data } = action.payload;
        state.listLoading = false;
        state.error = null;
        state.teachers = data;
    },

    networkCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.data);
    },

    networkUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },

    networkDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
