import api from "./axios";

export const loginApi = ({ username, password }) =>
  new Promise((resolve, reject) => {
    api
      .post(`/account/login`, {
        username,
        password,
      })
      .then((rs) => {
        resolve(rs.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const registerApi = ({ username, password }) =>
  new Promise((resolve, reject) => {
    api
      .post(`/account/register`, {
        username,
        password,
      })
      .then((rs) => {
        resolve(rs.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getGroups = () => api.get(`account/get-groups`);
export const createGroup = ({ group_name }) =>
  new Promise((resolve, reject) => {
    api
      .post(`/account/create-group`, {
        group_name,
      })
      .then((rs) => {
        resolve(rs.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
