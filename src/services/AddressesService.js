import Api from "./Api";

export default {
  newAddress(credentials) {
    return Api().post("address/new", credentials)
  },
  getAddressesUser() {
    return Api().get("addresses/my");
  },
  getAddressDefaultUser() {
    return Api().get("address/default");
  },
  getUser(userId) {
    return Api().get(`admin/user/${userId}`);
  },
  updateAddress(addressId, credentials) {
    return Api().put(`address/${addressId}`, credentials);
  },
  deleteAddress(userId) {
    return Api().delete(`address/${userId}`);
  },
};