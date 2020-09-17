import http from "../utils/axios";

const getAll = () => {
  return http.get("/firma/");
};

const get = id => {
  return http.get(`/firma/${id}`);
};

export default{
    getAll,
    get
}