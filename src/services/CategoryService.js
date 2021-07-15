import Api from "./Api";

export default {
  newCategory(credentials) {
    return Api().post("admin/category/new", credentials)
  },
  getCategories() {
    return Api().get("categories");
  },
  getAddressDefaultUser() {
    return Api().get("address/default");
  },
  getCategory(categoryId) {
    return Api().get(`category/${categoryId}`);
  },
  updateCategory(categoryId, credentials) {
    return Api().put(`admin/category/${categoryId}`, credentials);
  },
  deleteAddress(categoryId) {
    return Api().delete(`admin/category/${categoryId}`);
  },
};