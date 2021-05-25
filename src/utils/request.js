// import axios from 'axios';
// import { getAccessToken, getRefreshToken, setAccessToken } from "./localStorage";
// import { Router, BrowserRouter } from 'react-router-dom';
// const devEnv = true;

// const api = axios.create({
//   baseURL: devEnv ?  `http://localhost:4000/api` : `https://api.schooltribe.co/api`,
//   // responseType: "json"
// });

// // Alter defaults after instance has been created
// api.defaults.headers.common['Authorization'] = getAccessToken("token");
// // Add a request interceptor
// api.interceptors.request.use(
//   config => {
//       const token = getAccessToken("token");
//       if (token) {
//           config.headers['Authorization'] = 'Bearer ' + token;
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//   },
//   error => {
//       Promise.reject(error)
//   });



// //Add a response interceptor

// api.interceptors.response.use((response) => {
//   console.log(response);
//   return response
// }, function (error) {
//   // const originalRequest = error.config;

//   // if (error.response.status === 401 && originalRequest.url === 'http://13.232.130.60:8081/v1/auth/token') {
//   //     // push('/login');
//   //     return Promise.reject(error);
//   // }

//   // if (error.response.status === 401 && !originalRequest._retry) {

//   //     originalRequest._retry = true;
//   //     const refreshToken = getRefreshToken();
//   //     return axios.post('/auth/token',
//   //         {
//   //             "refresh_token": refreshToken
//   //         })
//   //         .then(res => {
//   //             if (res.status === 201) {
//   //                 setAccessToken(res.data);
//   //                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + getAccessToken();
//   //                 return axios(originalRequest);
//   //             }
//   //         })
//   // }
//   return Promise.reject(error);
// });

// export default api;