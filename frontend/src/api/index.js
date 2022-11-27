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
