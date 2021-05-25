import * as requestFromServer from "./interestCrud";
import { interestSlice , callTypes} from "./interestSlice";

const {actions} = interestSlice;

export const fetchInterests = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findInterests(queryParams)
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(actions.interestsFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Interest";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchInterest = id => dispatch => {
  if (!id) {
    return dispatch(actions.interestFetched({ interestForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getInterestById(id)
    .then(response => {
      console.log(response);
      const interest = response.data.data;
      dispatch(actions.interestFetched({ interestForEdit : interest }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Interest";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteInterest = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer  
    .deleteInterest(id)
    .then(response => {
      const data = response.data.data
      dispatch(actions.interestDeleted({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete Interest";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createInterest = interestForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createInterest(interestForCreation)  
    .then(response => {
      const data = response.data.data;
      dispatch(actions.interestCreated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create Interest";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateInterest = interest => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateInterest(interest)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.interestUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Interest";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
