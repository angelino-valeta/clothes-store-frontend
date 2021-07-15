import Api from "./Api"

export default {
    getOrderItem(orderId) {
        return Api().get(`orderItem/${orderId}`)
    },
    createOrderItem(credentials) {
        return Api().post('orderItem/new', credentials)
    },
    deleteOrderItem(orderItemId) {
        return Api().delete(`orderItem/${orderItemId}`)
    }
}