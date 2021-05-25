import * as requestFromServer from "./experienceCrud";
import { experienceSlice , callTypes} from "./experienceSlice";

const {actions} = experienceSlice;

export const fetchExperiences = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findExperiences(queryParams)
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(actions.experiencesFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Experience";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchExperience = id => dispatch => {
  if (!id) {
    return dispatch(actions.experienceFetched({ experienceForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getexperienceById(id)
    .then(response => {
      console.log(response);
      const experience = response.data.data;
      dispatch(actions.experienceFetched({ experienceForEdit : experience }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Experience";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteExperience = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer  
    .deleteExperience(id)
    .then(response => {
      const data = response.data.data
      dispatch(actions.experienceDeleted({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete Experience";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createExperience = experienceForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createExperience(experienceForCreation)  
    .then(response => {
      const data = response.data.data;
      dispatch(actions.experienceCreated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create Experience";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateExperience = experience => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateExperience(experience)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.experienceUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Experience";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
