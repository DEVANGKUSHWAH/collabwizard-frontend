import * as requestFromServer from "./educationCrud";
import { educationSlice , callTypes} from "./educationSlice";

const {actions} = educationSlice;

export const fetchEducations = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findEducations(queryParams)
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(actions.educationsFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Education";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchEducation = id => dispatch => {
  if (!id) {
    return dispatch(actions.educationFetched({ educationForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getEducationById(id)
    .then(response => {
      const education = response.data.data;
      dispatch(actions.educationFetched({ educationForEdit : education }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Education";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteEducation = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer  
    .deleteEducation(id)
    .then(response => {
      const data = response.data.data
      dispatch(actions.educationDeleted({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete Education";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createEducation = educationForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createEducation(educationForCreation)  
    .then(response => {
      const data = response.data.data;
      dispatch(actions.educationCreated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create Education";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateEducation = education => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateEducation(education)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.educationUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Education";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
