import * as requestFromServer from "./networkCrud";
import { networkSlice , callTypes} from "./networkSlice";

const {actions} = networkSlice;

export const fetchNetworks = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findNetworks(queryParams)
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(actions.networksFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Network";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchTeachers = queryParams => dispatch => {
    dispatch(actions.startCall({ callType: callTypes.list }));
    return requestFromServer
      .findTeachers(queryParams)
      .then(response => {
        console.log(response);
        const data = response.data.data;
        dispatch(actions.teachersFetched({ data }));
      })
      .catch(error => {
        error.clientMessage = "Can't find Network";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  };

export const fetchNetwork = id => dispatch => {
  if (!id) {
    return dispatch(actions.networkFetched({ networkForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getNetworkById(id)
    .then(response => {
      const Network = response.data.data;
      dispatch(actions.networkFetched({ networkForEdit : Network }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Network";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteNetwork = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer  
    .deleteNetwork(id)
    .then(response => {
      const data = response.data.data
      dispatch(actions.networkDeleted({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete Network";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createNetwork = networkForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createNetwork(networkForCreation)
    .then(response => {
      const data = response.data.data;
      dispatch(actions.networkCreated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create Network";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateNetwork = network => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateNetwork(network)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.networkUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Network";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
