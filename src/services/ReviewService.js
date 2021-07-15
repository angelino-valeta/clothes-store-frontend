import Api from "./Api"

export default {
    getProductReviews(productId) {
        return Api().get(`reviews/${productId}`)
    },
    getUserReviews(userId) {
        return Api().get(`review/${userId}`)
    },
    createReview(credentials) {
        return Api().post('review/new', credentials)
    },
    updateReview(credentials) {
        return Api().put('review', credentials)
    },
    deleteReview(reviewId) {
        return Api().delete(`review/${reviewId}`)
    }
}