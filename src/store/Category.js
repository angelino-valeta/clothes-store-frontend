import CategoryService from "@/services/CategoryService.js"

export const CategoryModule = {
    namespaced: true,
    strict: true,
    state: {
        categories: [],
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
    },
    actions: {
        async setCategories({
            commit
        }) {
            try {
                const categories = (await CategoryService.getCategories()).data;
                commit("SET_CATEGORIES", categories)
            } catch (error) {
                console.log(error.response.data.error)
            }
        },

        async getCategories({
            state,
            dispatch
        }) {
            if (state.categories && state.categories.length == 0) {
                await dispatch("setCategories")
            }
            return state.categories
        },

        async getCategoryName({
            state,
            dispatch
        }, categoryId) {
            const categories = await dispatch("getCategories")
            const index = categories.findIndex(obj => obj.id == categoryId)
            return state.categories[index].name;
        },

    }
}