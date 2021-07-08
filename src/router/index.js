import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";

// Auth and User Routers
import Register from "@/views/User/Register.vue";
import Login from "@/views/User/Login.vue";
import Profile from "@/views/User/Profile.vue";

// Products Routers
import Product from "@/views/Product/ProductDetails.vue";
import Products from "@/views/Product/Products.vue";
import CategoryProducts from "@/views/Product/CategoryProducts";

// Cart and Wishlist Routers
import Cart from '@/views/Cart/Cart.vue';
import Wishlist from '@/views/Wishlist/Wishlist.vue';


// Order Routers
import Checkout from '@/views/Order/Checkout.vue';
import Order from '@/views/Order/Order.vue';
import OrderList from '@/views/Order/OrderList.vue';


// PaymentMethod Routers
import PaymentMethod from '@/views/Payment/PaymentMethod.vue';


// Admin Routers
import Dashboard from "@/views/Admin/Dashboard.vue";
import AdminProfile from "@/views/Admin/Profile.vue";
// Admin Routers Orders
import AdminOrder from "@/views/Admin/Orders/Order.vue";
import AdminOrders from "@/views/Admin/Orders/Orders.vue";
// Admin Routers Products
import AdminAddProduct from "@/views/Admin/Products/AddProduct.vue";
import AdminProducts from "@/views/Admin/Products/Products.vue";
import AdminUpdateProduct from "@/views/Admin/Products/UpdateProduct.vue";
// Admin Routers Users
import AdminAddUser from "@/views/Admin/Users/AddUser.vue";
import AdminUpadateUser from "@/views/Admin/Users/UpdateUser.vue";
import AdminUsers from "@/views/Admin/Users/Users.vue";

// Error pages not found...
import NotFound from "@/views/Error/NotFound";
import Unauthorized from "@/views/Error/Unauthorized";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Helena Shop" }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "Register" }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "Login" }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { title: "Seu perfil" }
  },
  {
    path: "/product/:productId",
    name: "ProductDetails",
    component: Product,
    meta: { title: "Informações do produto" }
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: { title: "Produtos" }
  },
  {
    path: "/products/:category",
    name: "category-products",
    component: CategoryProducts,
    meta: { title: "Categorias" }
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: { title: "Seu carrinho de compra" }
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: Wishlist,
    meta: { title: "Lista de roupas desejadas" }
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: { title: "Checkout" }
  },
  {
    path: "/orders",
    name: "order",
    component: OrderList,
    meta: { title: "Minhas Encomendas" }
  },
  {
    path: "/order/:currentUser",
    name: "order",
    component: Order,
    meta: { title: "Encomenda" }
  },
  {
    path: "/payment-method",
    name: "payment-method",
    component: PaymentMethod,
    meta: { title: "Método de pagamento" }
  },
  {
    path: "/admin/profile",
    name: "admin-profile",
    component: AdminProfile,
    meta: { isAdmin: true, title: "Perfil do Administrador" }
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    name: "admin",
    component: Dashboard,
    meta: { isAdmin: true, title: "Gestão da Loja" },
    children: [
      {
        path: "/admin/profile",
        name: "admin-profile",
        component: AdminProfile,
        meta: { isAdmin: true, title: "Perfil do Administrador" }
      },
      {
        path: "/admin/order/:orderId",
        name: "admin-order",
        component: AdminOrder,
        meta: { isAdmin: true, title: "Encomenda" }
      },
      {
        path: "/admin/orders",
        name: "admin-orders",
        component: AdminOrders,
        meta: { isAdmin: true, title: "Lista de Encomendas" }
      },
      {
        path: "/admin/add-product",
        name: "admin-add-product",
        component: AdminAddProduct,
        meta: { isAdmin: true, title: "Adicionar Produto" }
      },
      {
        path: "/admin/products",
        name: "admin-products",
        component: AdminProducts,
        meta: { isAdmin: true, title: "Lista de Produtos" }
      },
      {
        path: "/admin/update-product/:productId",
        name: "admin-product",
        component: AdminUpdateProduct,
        meta: { isAdmin: true, title: "Actualizar Produto" }
      },
      {
        path: "/admin/add-user",
        name: "admin-add-user",
        component: AdminAddUser,
        meta: { isAdmin: true, title: "Adicionar Usuário" }
      },
      {
        path: "/admin/update-user/:userId",
        name: "admin-update-user",
        component: AdminUpadateUser,
        meta: { isAdmin: true, title: "Actualizar dados do Usuário" }
      },
      {
        path: "/admin/users",
        name: "admin-users",
        component: AdminUsers,
        meta: { isAdmin: true, title: "Lista de Usuários" }
      },
    ],
  },
  {
    path: "/error/401",
    name: "unauthorized",
    component: Unauthorized,
    meta: { title: "Acesso negado" }
  },
  {
    path: "/*",
    name: "not-found",
    component: NotFound,
    meta: { title: "Página não encontrada" }
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
