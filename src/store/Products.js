export const ProductsModule = {
  namespaced: true,
  strict: true,
  state: {
    products: null,
    displayProducts: null,
    pCount: null,
    perPage: null,
    searchParameter: {
      text: "",
      lowestPrice: 50,
      maximumPrice: 100000,
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
      state.perPage = 8
    },
    SET_SEARCH_TEXT(state, searchText) {
      state.searchParameter.text = searchText;
    },
    SET_SEARCH_CATEGORY_ID(state, categoryId) {
      state.searchParameter.categoryId = categoryId;
    },
    SET_LOWEST_PRICE(state, lowestPrice) {
      state.searchParameter.lowestPrice = lowestPrice;
    },
    SET_MAXIMUM_PRICE(state, maximumPrice) {
      state.searchParameter.maximumPrice = maximumPrice;
    },
  },
  actions: {
    async setSearchParameter({
      commit
    }, route) {

      if (route.query.q) {
        commit("SET_SEARCH_TEXT", route.query.q)
      } else commit("SET_SEARCH_TEXT", "")
      if (route.query.lo) {
        const lo = parseInt(route.query.lo);
        commit("SET_LOWEST_PRICE", lo)
      } else commit("SET_LOWEST_PRICE", 0)
      if (route.query.hi) {
        const hi = parseInt(route.query.hi);
        commit("SET_MAXIMUM_PRICE", hi)
      } else commit("SET_MAXIMUM_PRICE", 100000)
    },

  },
  async setProducts({
    commit,
    state,
    dispatch
  }) {
    const products = await dispatch("filterProducts");
    commit("SET_PRODUCTS", products);
    commit("SET_P_COUNT", products.length);
    const displayProducts = products.slice(0, state.perPage);
    commit("SET_DISPLAY_PRODUCTS", displayProducts)
  },
  paginate({
    commit,
    state
  }, currentPage) {
    const start = (currentPage - 1) * state.perPage;
    const displayProducts = state.products.slice(start, start + state.perPage);
    commit("SET_DISPLAY_PRODUCTS", displayProducts);
  },

}