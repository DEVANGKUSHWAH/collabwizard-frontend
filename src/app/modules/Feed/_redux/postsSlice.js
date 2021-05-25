import {createSlice} from "@reduxjs/toolkit";

const initialPostsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  postForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const postSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
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

    postFetched: (state, action) => {
      const { postForEdit } = action.payload;
      state.actionsLoading = false;
      state.postForEdit = postForEdit
      state.error = null;
    },

    postsFetched: (state, action) => {
      const { data } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = data;
    },

    postCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.unshift(action.payload.data);
    },

    postUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },

    postDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
