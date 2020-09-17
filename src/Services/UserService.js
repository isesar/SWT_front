import http from "../utils/axios";

const getAll = () => {
  return http.get("/korisnik/");
};

const get = id => {
  return http.get(`/korisnik/${id}`);
};

const create = data => {
  return http.post("/korisnik", data);
};

const update = (id, data) => {
  return http.put(`/korisnik/${id}`, data);
};

const remove = id => {
  return http.delete(`/korisnik/${id}`);
};




export default {
  getAll,
  get,
  create,
  update,
  remove,
};