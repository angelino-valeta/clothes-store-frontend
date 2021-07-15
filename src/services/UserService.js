import Api from "./Api";

export default {
  createUser(credentials) {
    return Api().post("admin/users", credentials)
  },
  getUsers() {
    return Api().get("admin/users");
  },
  getUser(userId) {
    return Api().get(`admin/user/${userId}`);
  },
  updateUser(userId, credentials) {
    return Api().put(`admin/user/${userId}`, credentials);
  },
  deleteUser(userId) {
    return Api().delete(`admin/user/${userId}`);
  },
};