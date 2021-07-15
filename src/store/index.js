import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import {
	CurrentUserModule
} from "./CurrentUser.js"
import {
	CategoryModule
} from "./Category.js";
import {
	ProductsModule
} from "./Products.js";
import {
	CartModule
} from "./Cart.js";
import {
	CheckoutModule
} from "./Checkout.js";

Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState()],
	modules: {
		CurrentUser: CurrentUserModule,
		Category: CategoryModule,
		Products: ProductsModule,
		Cart: CartModule,
		Checkout: CheckoutModule,

	}
});