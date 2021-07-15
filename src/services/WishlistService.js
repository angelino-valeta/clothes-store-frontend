import Api from "./Api"

export default {
    getWishlist() {
        return Api().get('wishlist')
    },
    getWishlistItem(productId) {
        return Api().get(`wishlist/item/${productId}`)
    },
    createWishlist(credentials) {
        return Api().post('wishlist/new', credentials)
    },
    removeWishlistItem(productId) {
        return Api().delete(`wishlist/item/${productId}`)
    },
    deleteWishItemByProduct(productId) {
        return Api().delete(`wishlist/${productId}`)
    }
}