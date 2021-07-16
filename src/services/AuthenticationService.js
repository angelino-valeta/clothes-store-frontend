import Api from "./Api";

export default {
  register(credentials) {
    return Api().post("/auth/register", credentials);
  },
  login(credentials) {
    return Api().post("/auth/login", credentials);
  },
  updateDetails(credentials) {
    return Api().put("auth/update", credentials);
  },
  updatePassword(credentials) {
    return Api().put("auth/password/update", credentials);
  },
};