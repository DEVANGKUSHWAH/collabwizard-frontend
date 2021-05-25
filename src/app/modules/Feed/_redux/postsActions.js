import * as requestFromServer from "./postsCrud";
import { postSlice , callTypes} from "./postsSlice";

const {actions} = postSlice;

export const fetchPosts = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findPosts(queryParams)
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(actions.postsFetched({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Post";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchPost = id => dispatch => {
  if (!id) {
    return dispatch(actions.postFetched({ postForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getPostById(id)
    .then(response => {
      console.log(response);
      const Post = response.data.data;
      dispatch(actions.postFetched({ postForEdit : Post }));
    })
    .catch(error => {
      error.clientMessage = "Can't find Post";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deletePost = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer  
    .deletePost(id)
    .then(response => {
      const data = response.data.data
      dispatch(actions.postDeleted({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete Post";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createPost = postForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createPost(postForCreation)
    .then(response => {
      const data = response.data.data;
      dispatch(actions.postCreated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't create Post";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updatePost = post => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updatePost(post)
    .then((response) => {
      const data = response.data.data;
      dispatch(actions.postUpdated({ data }));
    })
    .catch(error => {
      error.clientMessage = "Can't update Post";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
