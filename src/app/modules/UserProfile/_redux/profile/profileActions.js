import * as requestFromServer from "./profileCrud";
import { profileSlice , callTypes} from "./profileSlice";

const {actions} = profileSlice;

export const fetchProfiles = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findProfiles(queryParams)
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(actions.profilesFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Education";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchProfile = id => dispatch => {
  if (!id) {
    return dispatch(actions.profileFetched({ educationForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getProfileById(id)
    .then(response => {
      console.log(response);
      const education = response.data.data;
      dispatch(actions.profileFetched({ educationForEdit : education }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Education";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

// export const deleteEducation = id => dispatch => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer  
//     .(id)
//     .then(response => {
//       const data = response.data.data
//       dispatch(actions.educationDeleted({ data }));
//     })
//     .catch(error => {
//       error.clientMessage = "Can't delete Education";
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };

// export const createEducation = educationForCreation => dispatch => {
//   dispatch(actions.startCall({ callType: callTypes.action }));
//   return requestFromServer
//     .createEducation(educationForCreation)  
//     .then(response => {
//       const data = response.data.data;
//       dispatch(actions.educationCreated({ data }));
//     })
//     .catch(error => {
//       error.clientMessage = "Can't create Education";
//       dispatch(actions.catchError({ error, callType: callTypes.action }));
//     });
// };

export const updateProfile = (id,profile) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateProfile(id,profile)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.profileUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Education";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
