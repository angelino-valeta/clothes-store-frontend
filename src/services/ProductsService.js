import Api from "./Api"

export default {
    getProducts() {
        return Api().get('products')
    },
    getProductsIsFeatured(limit) {
        return Api().get(`products/isFeatured?limit=${limit}`)
    },
    getProductsFeaturedIn(limit) {
        return Api().get(`products/featuredIn?limit=${limit}`)
    },
    getNewsProduct(limit) {
        return Api().get(`products/news/${limit}`)
    },
    getRecommendation({
        categoryId,
        limit
    }) {
        return Api().get(`products/recomendation/${categoryId}?limit=${limit}`)
    },
    getProduct(id) {
        return Api().get(`product/${id}`)
    },
    newProduct(credentials) {
        return Api().post('admin/product/new', credentials)
    },
    updateProduct(id, credentials) {
        return Api().put(`admin/product/${id}`, credentials)
    },
    deleteProduct(id) {
        return Api().delete(`/admin/product/${id}`)
    }
}