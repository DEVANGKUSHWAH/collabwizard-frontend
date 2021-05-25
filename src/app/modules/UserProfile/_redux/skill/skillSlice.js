import {createSlice} from "@reduxjs/toolkit";

const initialSkillsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  skillForEdit: undefined,
  error: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const skillSlice = createSlice({
  name: "skills",
  initialState: initialSkillsState,
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

    skillFetched: (state, action) => {
      const { skillForEdit } = action.payload;
      state.actionsLoading = false;
      state.skillForEdit = skillForEdit
      state.error = null;
    },

    skillsFetched: (state, action) => {
      const { data } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = data;
    },

    skillCreated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.data);
    },

    skillUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },

    skillDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.id !== action.payload.data.id);
    },
  }
});
