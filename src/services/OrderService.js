import Api from "./Api"

export default {
    createOrder(credentials) {
        return Api().post('order/new', credentials)
    },
    getOrder(orderId) {
        return Api().get(`order/${orderId}`)
    },
    getOrders() {
        return Api().get('admin/orders')
    },

    myOrders() {
        return Api().get(`orders/me`)
    },

    updateStatusOrder(orderId, credentials) {
        return Api().put(`admin/order/${orderId}`, credentials)
    },
    deleteOrder(orderId) {
        return Api().delete(`admin/order/${orderId}`)
    }
}