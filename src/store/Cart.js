export const CartModule = {
  namespaced: true,
  strict: true,
  state: {
    cart: [],
    cartLength: 0
  },
  actions: {
    addProductToCart({
      state,
      commit
    }, product) {
      const cartProduct = state.cart.find(prod => prod.id === product.id)
      if (!cartProduct) {
        commit("pushProductToCart", product)
      } else {
        commit("incrementProductQty", product)
      }

      commit("incrementCartLength")

    },

  },
  mutations: {
    pushProductToCart(state, product) {
      product.stock = 1
      state.cart.push(product)
    },
    incrementProductQty(state, product) {
      product.stock++
      let indexOfProduct = state.cart.indxOf(product)
      state.cart.splice(indexOfProduct, 1, product)
    },

    incrementCartLength(state) {
      state.cartLength = 0
      if (state.cart.length > 0) {
        state.cart.map(product => {
          state.cartLength += product.stock
        })
      }
    }

  },

}