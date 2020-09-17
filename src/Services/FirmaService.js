import http from "../utils/axios";

const getAll = () => {
  return http.get("/firma/");
};

const get = id => {
  return http.get(`/firma/${id}`);
};

const create = data => {
  return http.post("/firma", data);
};

const update = (id, data) => {
  return http.put(`/firma/${id}`, data);
};

const remove = id => {
  return http.delete(`/firma/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};