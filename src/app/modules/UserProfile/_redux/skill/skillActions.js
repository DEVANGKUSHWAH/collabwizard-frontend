import * as requestFromServer from "./skillCrud";
import { skillSlice , callTypes} from "./skillSlice";

const {actions} = skillSlice;

export const fetchSkills = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findSkills(queryParams)
    .then(response => {
      const data = response.data.data;
      dispatch(actions.skillsFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Skill";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchSkill = id => dispatch => {
  if (!id) {
    return dispatch(actions.skillFetched({ skillForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getSkillById(id)
    .then(response => {
      console.log(response);
      const skill = response.data.data;
      dispatch(actions.skillFetched({ skillForEdit : skill }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Skill";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteSkill = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer  
    .deleteSkill(id)
    .then(response => {
      const data = response.data.data
      dispatch(actions.skillDeleted({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete Skill";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createSkill = skillForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createSkill(skillForCreation)  
    .then(response => {
      const data = response.data.data;
      dispatch(actions.skillCreated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create Skill";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateSkill = skill => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateSkill(skill)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.skillUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Skill";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
