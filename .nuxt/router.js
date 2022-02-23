import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ebe810a = () => interopDefault(import('../pages/calendar/index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _0d59bfd6 = () => interopDefault(import('../pages/chat/index.vue' /* webpackChunkName: "pages/chat/index" */))
const _7165ead9 = () => interopDefault(import('../pages/account/forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */))
const _5ccc5d86 = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _3935627f = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _3f71b2be = () => interopDefault(import('../pages/auth/lock-screen.vue' /* webpackChunkName: "pages/auth/lock-screen" */))
const _4c07d420 = () => interopDefault(import('../pages/auth/login-1.vue' /* webpackChunkName: "pages/auth/login-1" */))
const _3129da56 = () => interopDefault(import('../pages/auth/recoverpwd.vue' /* webpackChunkName: "pages/auth/recoverpwd" */))
const _48024f84 = () => interopDefault(import('../pages/auth/register-1.vue' /* webpackChunkName: "pages/auth/register-1" */))
const _6dda9e25 = () => interopDefault(import('../pages/calendar/data-calendar.js' /* webpackChunkName: "pages/calendar/data-calendar" */))
const _67ffc8d5 = () => interopDefault(import('../pages/charts/apex/index.vue' /* webpackChunkName: "pages/charts/apex/index" */))
const _04f88b1f = () => interopDefault(import('../pages/charts/chartist/index.vue' /* webpackChunkName: "pages/charts/chartist/index" */))
const _553d15ea = () => interopDefault(import('../pages/charts/chartjs/index.vue' /* webpackChunkName: "pages/charts/chartjs/index" */))
const _aefc80e8 = () => interopDefault(import('../pages/charts/echart/index.vue' /* webpackChunkName: "pages/charts/echart/index" */))
const _a497c310 = () => interopDefault(import('../pages/chat/data.js' /* webpackChunkName: "pages/chat/data" */))
const _2bacab90 = () => interopDefault(import('../pages/contacts/grid.vue' /* webpackChunkName: "pages/contacts/grid" */))
const _27696390 = () => interopDefault(import('../pages/contacts/list.vue' /* webpackChunkName: "pages/contacts/list" */))
const _6b054a27 = () => interopDefault(import('../pages/contacts/profile.vue' /* webpackChunkName: "pages/contacts/profile" */))
const _0d0ad62a = () => interopDefault(import('../pages/ecommerce/add-product.vue' /* webpackChunkName: "pages/ecommerce/add-product" */))
const _1547a349 = () => interopDefault(import('../pages/ecommerce/cart.vue' /* webpackChunkName: "pages/ecommerce/cart" */))
const _3803c1ef = () => interopDefault(import('../pages/ecommerce/checkout.vue' /* webpackChunkName: "pages/ecommerce/checkout" */))
const _85ec6d08 = () => interopDefault(import('../pages/ecommerce/customers.vue' /* webpackChunkName: "pages/ecommerce/customers" */))
const _f8f715fe = () => interopDefault(import('../pages/ecommerce/data-products.js' /* webpackChunkName: "pages/ecommerce/data-products" */))
const _4c4bff64 = () => interopDefault(import('../pages/ecommerce/orders.vue' /* webpackChunkName: "pages/ecommerce/orders" */))
const _1e59070d = () => interopDefault(import('../pages/ecommerce/products.vue' /* webpackChunkName: "pages/ecommerce/products" */))
const _0d417ce4 = () => interopDefault(import('../pages/ecommerce/shops.vue' /* webpackChunkName: "pages/ecommerce/shops" */))
const _9b8eb642 = () => interopDefault(import('../pages/email/data-inbox.js' /* webpackChunkName: "pages/email/data-inbox" */))
const _caa23fee = () => interopDefault(import('../pages/email/inbox.vue' /* webpackChunkName: "pages/email/inbox" */))
const _00011f90 = () => interopDefault(import('../pages/email/sidepanel.vue' /* webpackChunkName: "pages/email/sidepanel" */))
const _1f4ff7be = () => interopDefault(import('../pages/email/toolbar.vue' /* webpackChunkName: "pages/email/toolbar" */))
const _a75fe37a = () => interopDefault(import('../pages/form/advanced.vue' /* webpackChunkName: "pages/form/advanced" */))
const _f4428f64 = () => interopDefault(import('../pages/form/editor.vue' /* webpackChunkName: "pages/form/editor" */))
const _341216d0 = () => interopDefault(import('../pages/form/elements.vue' /* webpackChunkName: "pages/form/elements" */))
const _35b636e6 = () => interopDefault(import('../pages/form/mask.vue' /* webpackChunkName: "pages/form/mask" */))
const _ce0c7aae = () => interopDefault(import('../pages/form/repeater.vue' /* webpackChunkName: "pages/form/repeater" */))
const _57b38a3c = () => interopDefault(import('../pages/form/upload.vue' /* webpackChunkName: "pages/form/upload" */))
const _6ff2264c = () => interopDefault(import('../pages/form/validation.vue' /* webpackChunkName: "pages/form/validation" */))
const _d4d4a568 = () => interopDefault(import('../pages/form/wizard.vue' /* webpackChunkName: "pages/form/wizard" */))
const _d97b6a84 = () => interopDefault(import('../pages/icons/boxicons.vue' /* webpackChunkName: "pages/icons/boxicons" */))
const _cc7e9522 = () => interopDefault(import('../pages/icons/data-fontawesome.js' /* webpackChunkName: "pages/icons/data-fontawesome" */))
const _2cb48c78 = () => interopDefault(import('../pages/icons/data-material.js' /* webpackChunkName: "pages/icons/data-material" */))
const _ee586cf4 = () => interopDefault(import('../pages/icons/dripicons.vue' /* webpackChunkName: "pages/icons/dripicons" */))
const _8ab75a16 = () => interopDefault(import('../pages/icons/fontawesome.vue' /* webpackChunkName: "pages/icons/fontawesome" */))
const _1c5f9bf4 = () => interopDefault(import('../pages/icons/materialdesign.vue' /* webpackChunkName: "pages/icons/materialdesign" */))
const _9d9a403c = () => interopDefault(import('../pages/icons/unicons.vue' /* webpackChunkName: "pages/icons/unicons" */))
const _43c58260 = () => interopDefault(import('../pages/invoices/detail.vue' /* webpackChunkName: "pages/invoices/detail" */))
const _4a0ad65d = () => interopDefault(import('../pages/invoices/list.vue' /* webpackChunkName: "pages/invoices/list" */))
const _19b53932 = () => interopDefault(import('../pages/maps/google.vue' /* webpackChunkName: "pages/maps/google" */))
const _07c99102 = () => interopDefault(import('../pages/maps/leaflet/index.vue' /* webpackChunkName: "pages/maps/leaflet/index" */))
const _460c7ac2 = () => interopDefault(import('../pages/tables/advanced.vue' /* webpackChunkName: "pages/tables/advanced" */))
const _6c694884 = () => interopDefault(import('../pages/tables/basic.vue' /* webpackChunkName: "pages/tables/basic" */))
const _1fa27b46 = () => interopDefault(import('../pages/tables/dataAdvancedtable.js' /* webpackChunkName: "pages/tables/dataAdvancedtable" */))
const _3fde3fb0 = () => interopDefault(import('../pages/ui/alerts.vue' /* webpackChunkName: "pages/ui/alerts" */))
const _80242b80 = () => interopDefault(import('../pages/ui/buttons.vue' /* webpackChunkName: "pages/ui/buttons" */))
const _71bf4ee2 = () => interopDefault(import('../pages/ui/cards.vue' /* webpackChunkName: "pages/ui/cards" */))
const _38e55831 = () => interopDefault(import('../pages/ui/carousel.vue' /* webpackChunkName: "pages/ui/carousel" */))
const _8b0632fe = () => interopDefault(import('../pages/ui/colors.vue' /* webpackChunkName: "pages/ui/colors" */))
const _40757a62 = () => interopDefault(import('../pages/ui/dropdown.vue' /* webpackChunkName: "pages/ui/dropdown" */))
const _5c232827 = () => interopDefault(import('../pages/ui/general.vue' /* webpackChunkName: "pages/ui/general" */))
const _b939b8d2 = () => interopDefault(import('../pages/ui/grid.vue' /* webpackChunkName: "pages/ui/grid" */))
const _179ee789 = () => interopDefault(import('../pages/ui/images.vue' /* webpackChunkName: "pages/ui/images" */))
const _825d6574 = () => interopDefault(import('../pages/ui/lightbox.vue' /* webpackChunkName: "pages/ui/lightbox" */))
const _177d9977 = () => interopDefault(import('../pages/ui/modals.vue' /* webpackChunkName: "pages/ui/modals" */))
const _233cbbb2 = () => interopDefault(import('../pages/ui/placeholder.vue' /* webpackChunkName: "pages/ui/placeholder" */))
const _02bb4385 = () => interopDefault(import('../pages/ui/progressbar.vue' /* webpackChunkName: "pages/ui/progressbar" */))
const _2ede4dc6 = () => interopDefault(import('../pages/ui/rangeslider.vue' /* webpackChunkName: "pages/ui/rangeslider" */))
const _2d9807a4 = () => interopDefault(import('../pages/ui/rating.vue' /* webpackChunkName: "pages/ui/rating" */))
const _4ab2c87e = () => interopDefault(import('../pages/ui/sweet-alert.vue' /* webpackChunkName: "pages/ui/sweet-alert" */))
const _f57d3dce = () => interopDefault(import('../pages/ui/tabs-accordions.vue' /* webpackChunkName: "pages/ui/tabs-accordions" */))
const _ef427b80 = () => interopDefault(import('../pages/ui/typography.vue' /* webpackChunkName: "pages/ui/typography" */))
const _627ba00c = () => interopDefault(import('../pages/ui/video.vue' /* webpackChunkName: "pages/ui/video" */))
const _66017a6a = () => interopDefault(import('../pages/utility/404.vue' /* webpackChunkName: "pages/utility/404" */))
const _01ad2008 = () => interopDefault(import('../pages/utility/500.vue' /* webpackChunkName: "pages/utility/500" */))
const _afb80e8e = () => interopDefault(import('../pages/utility/comingsoon.vue' /* webpackChunkName: "pages/utility/comingsoon" */))
const _ae8f1ecc = () => interopDefault(import('../pages/utility/faqs.vue' /* webpackChunkName: "pages/utility/faqs" */))
const _a4d447b4 = () => interopDefault(import('../pages/utility/maintenance.vue' /* webpackChunkName: "pages/utility/maintenance" */))
const _3b9d2cd9 = () => interopDefault(import('../pages/utility/pricing.vue' /* webpackChunkName: "pages/utility/pricing" */))
const _e3df7dbc = () => interopDefault(import('../pages/utility/starter.vue' /* webpackChunkName: "pages/utility/starter" */))
const _5270003e = () => interopDefault(import('../pages/utility/timeline.vue' /* webpackChunkName: "pages/utility/timeline" */))
const _26181190 = () => interopDefault(import('../pages/charts/apex/data.js' /* webpackChunkName: "pages/charts/apex/data" */))
const _b62677fc = () => interopDefault(import('../pages/charts/chartist/data.js' /* webpackChunkName: "pages/charts/chartist/data" */))
const _43aba543 = () => interopDefault(import('../pages/charts/chartjs/BarChart.vue' /* webpackChunkName: "pages/charts/chartjs/BarChart" */))
const _57792b14 = () => interopDefault(import('../pages/charts/chartjs/DonutChart.vue' /* webpackChunkName: "pages/charts/chartjs/DonutChart" */))
const _76261d7c = () => interopDefault(import('../pages/charts/chartjs/LineChart.vue' /* webpackChunkName: "pages/charts/chartjs/LineChart" */))
const _2264f02c = () => interopDefault(import('../pages/charts/chartjs/PieChart.vue' /* webpackChunkName: "pages/charts/chartjs/PieChart" */))
const _540a7a78 = () => interopDefault(import('../pages/charts/chartjs/PolarChart.vue' /* webpackChunkName: "pages/charts/chartjs/PolarChart" */))
const _61e2f0a0 = () => interopDefault(import('../pages/charts/chartjs/RadarChart.vue' /* webpackChunkName: "pages/charts/chartjs/RadarChart" */))
const _40222faf = () => interopDefault(import('../pages/charts/echart/data.js' /* webpackChunkName: "pages/charts/echart/data" */))
const _5ab7a344 = () => interopDefault(import('../pages/maps/leaflet/basic.vue' /* webpackChunkName: "pages/maps/leaflet/basic" */))
const _6d67602a = () => interopDefault(import('../pages/maps/leaflet/boundary.vue' /* webpackChunkName: "pages/maps/leaflet/boundary" */))
const _6c29c71c = () => interopDefault(import('../pages/maps/leaflet/geometry.vue' /* webpackChunkName: "pages/maps/leaflet/geometry" */))
const _33d3516c = () => interopDefault(import('../pages/maps/leaflet/icons.vue' /* webpackChunkName: "pages/maps/leaflet/icons" */))
const _392f6a29 = () => interopDefault(import('../pages/maps/leaflet/markers.vue' /* webpackChunkName: "pages/maps/leaflet/markers" */))
const _c015b7fa = () => interopDefault(import('../pages/ecommerce/product-detail/_id.vue' /* webpackChunkName: "pages/ecommerce/product-detail/_id" */))
const _023e1e18 = () => interopDefault(import('../pages/email/reademail/_id.vue' /* webpackChunkName: "pages/email/reademail/_id" */))
const _760df188 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendar",
    component: _9ebe810a,
    name: "calendar"
  }, {
    path: "/chat",
    component: _0d59bfd6,
    name: "chat"
  }, {
    path: "/account/forgot-password",
    component: _7165ead9,
    name: "account-forgot-password"
  }, {
    path: "/account/login",
    component: _5ccc5d86,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _3935627f,
    name: "account-register"
  }, {
    path: "/auth/lock-screen",
    component: _3f71b2be,
    name: "auth-lock-screen"
  }, {
    path: "/auth/login-1",
    component: _4c07d420,
    name: "auth-login-1"
  }, {
    path: "/auth/recoverpwd",
    component: _3129da56,
    name: "auth-recoverpwd"
  }, {
    path: "/auth/register-1",
    component: _48024f84,
    name: "auth-register-1"
  }, {
    path: "/calendar/data-calendar",
    component: _6dda9e25,
    name: "calendar-data-calendar"
  }, {
    path: "/charts/apex",
    component: _67ffc8d5,
    name: "charts-apex"
  }, {
    path: "/charts/chartist",
    component: _04f88b1f,
    name: "charts-chartist"
  }, {
    path: "/charts/chartjs",
    component: _553d15ea,
    name: "charts-chartjs"
  }, {
    path: "/charts/echart",
    component: _aefc80e8,
    name: "charts-echart"
  }, {
    path: "/chat/data",
    component: _a497c310,
    name: "chat-data"
  }, {
    path: "/contacts/grid",
    component: _2bacab90,
    name: "contacts-grid"
  }, {
    path: "/contacts/list",
    component: _27696390,
    name: "contacts-list"
  }, {
    path: "/contacts/profile",
    component: _6b054a27,
    name: "contacts-profile"
  }, {
    path: "/ecommerce/add-product",
    component: _0d0ad62a,
    name: "ecommerce-add-product"
  }, {
    path: "/ecommerce/cart",
    component: _1547a349,
    name: "ecommerce-cart"
  }, {
    path: "/ecommerce/checkout",
    component: _3803c1ef,
    name: "ecommerce-checkout"
  }, {
    path: "/ecommerce/customers",
    component: _85ec6d08,
    name: "ecommerce-customers"
  }, {
    path: "/ecommerce/data-products",
    component: _f8f715fe,
    name: "ecommerce-data-products"
  }, {
    path: "/ecommerce/orders",
    component: _4c4bff64,
    name: "ecommerce-orders"
  }, {
    path: "/ecommerce/products",
    component: _1e59070d,
    name: "ecommerce-products"
  }, {
    path: "/ecommerce/shops",
    component: _0d417ce4,
    name: "ecommerce-shops"
  }, {
    path: "/email/data-inbox",
    component: _9b8eb642,
    name: "email-data-inbox"
  }, {
    path: "/email/inbox",
    component: _caa23fee,
    name: "email-inbox"
  }, {
    path: "/email/sidepanel",
    component: _00011f90,
    name: "email-sidepanel"
  }, {
    path: "/email/toolbar",
    component: _1f4ff7be,
    name: "email-toolbar"
  }, {
    path: "/form/advanced",
    component: _a75fe37a,
    name: "form-advanced"
  }, {
    path: "/form/editor",
    component: _f4428f64,
    name: "form-editor"
  }, {
    path: "/form/elements",
    component: _341216d0,
    name: "form-elements"
  }, {
    path: "/form/mask",
    component: _35b636e6,
    name: "form-mask"
  }, {
    path: "/form/repeater",
    component: _ce0c7aae,
    name: "form-repeater"
  }, {
    path: "/form/upload",
    component: _57b38a3c,
    name: "form-upload"
  }, {
    path: "/form/validation",
    component: _6ff2264c,
    name: "form-validation"
  }, {
    path: "/form/wizard",
    component: _d4d4a568,
    name: "form-wizard"
  }, {
    path: "/icons/boxicons",
    component: _d97b6a84,
    name: "icons-boxicons"
  }, {
    path: "/icons/data-fontawesome",
    component: _cc7e9522,
    name: "icons-data-fontawesome"
  }, {
    path: "/icons/data-material",
    component: _2cb48c78,
    name: "icons-data-material"
  }, {
    path: "/icons/dripicons",
    component: _ee586cf4,
    name: "icons-dripicons"
  }, {
    path: "/icons/fontawesome",
    component: _8ab75a16,
    name: "icons-fontawesome"
  }, {
    path: "/icons/materialdesign",
    component: _1c5f9bf4,
    name: "icons-materialdesign"
  }, {
    path: "/icons/unicons",
    component: _9d9a403c,
    name: "icons-unicons"
  }, {
    path: "/invoices/detail",
    component: _43c58260,
    name: "invoices-detail"
  }, {
    path: "/invoices/list",
    component: _4a0ad65d,
    name: "invoices-list"
  }, {
    path: "/maps/google",
    component: _19b53932,
    name: "maps-google"
  }, {
    path: "/maps/leaflet",
    component: _07c99102,
    name: "maps-leaflet"
  }, {
    path: "/tables/advanced",
    component: _460c7ac2,
    name: "tables-advanced"
  }, {
    path: "/tables/basic",
    component: _6c694884,
    name: "tables-basic"
  }, {
    path: "/tables/dataAdvancedtable",
    component: _1fa27b46,
    name: "tables-dataAdvancedtable"
  }, {
    path: "/ui/alerts",
    component: _3fde3fb0,
    name: "ui-alerts"
  }, {
    path: "/ui/buttons",
    component: _80242b80,
    name: "ui-buttons"
  }, {
    path: "/ui/cards",
    component: _71bf4ee2,
    name: "ui-cards"
  }, {
    path: "/ui/carousel",
    component: _38e55831,
    name: "ui-carousel"
  }, {
    path: "/ui/colors",
    component: _8b0632fe,
    name: "ui-colors"
  }, {
    path: "/ui/dropdown",
    component: _40757a62,
    name: "ui-dropdown"
  }, {
    path: "/ui/general",
    component: _5c232827,
    name: "ui-general"
  }, {
    path: "/ui/grid",
    component: _b939b8d2,
    name: "ui-grid"
  }, {
    path: "/ui/images",
    component: _179ee789,
    name: "ui-images"
  }, {
    path: "/ui/lightbox",
    component: _825d6574,
    name: "ui-lightbox"
  }, {
    path: "/ui/modals",
    component: _177d9977,
    name: "ui-modals"
  }, {
    path: "/ui/placeholder",
    component: _233cbbb2,
    name: "ui-placeholder"
  }, {
    path: "/ui/progressbar",
    component: _02bb4385,
    name: "ui-progressbar"
  }, {
    path: "/ui/rangeslider",
    component: _2ede4dc6,
    name: "ui-rangeslider"
  }, {
    path: "/ui/rating",
    component: _2d9807a4,
    name: "ui-rating"
  }, {
    path: "/ui/sweet-alert",
    component: _4ab2c87e,
    name: "ui-sweet-alert"
  }, {
    path: "/ui/tabs-accordions",
    component: _f57d3dce,
    name: "ui-tabs-accordions"
  }, {
    path: "/ui/typography",
    component: _ef427b80,
    name: "ui-typography"
  }, {
    path: "/ui/video",
    component: _627ba00c,
    name: "ui-video"
  }, {
    path: "/utility/404",
    component: _66017a6a,
    name: "utility-404"
  }, {
    path: "/utility/500",
    component: _01ad2008,
    name: "utility-500"
  }, {
    path: "/utility/comingsoon",
    component: _afb80e8e,
    name: "utility-comingsoon"
  }, {
    path: "/utility/faqs",
    component: _ae8f1ecc,
    name: "utility-faqs"
  }, {
    path: "/utility/maintenance",
    component: _a4d447b4,
    name: "utility-maintenance"
  }, {
    path: "/utility/pricing",
    component: _3b9d2cd9,
    name: "utility-pricing"
  }, {
    path: "/utility/starter",
    component: _e3df7dbc,
    name: "utility-starter"
  }, {
    path: "/utility/timeline",
    component: _5270003e,
    name: "utility-timeline"
  }, {
    path: "/charts/apex/data",
    component: _26181190,
    name: "charts-apex-data"
  }, {
    path: "/charts/chartist/data",
    component: _b62677fc,
    name: "charts-chartist-data"
  }, {
    path: "/charts/chartjs/BarChart",
    component: _43aba543,
    name: "charts-chartjs-BarChart"
  }, {
    path: "/charts/chartjs/DonutChart",
    component: _57792b14,
    name: "charts-chartjs-DonutChart"
  }, {
    path: "/charts/chartjs/LineChart",
    component: _76261d7c,
    name: "charts-chartjs-LineChart"
  }, {
    path: "/charts/chartjs/PieChart",
    component: _2264f02c,
    name: "charts-chartjs-PieChart"
  }, {
    path: "/charts/chartjs/PolarChart",
    component: _540a7a78,
    name: "charts-chartjs-PolarChart"
  }, {
    path: "/charts/chartjs/RadarChart",
    component: _61e2f0a0,
    name: "charts-chartjs-RadarChart"
  }, {
    path: "/charts/echart/data",
    component: _40222faf,
    name: "charts-echart-data"
  }, {
    path: "/maps/leaflet/basic",
    component: _5ab7a344,
    name: "maps-leaflet-basic"
  }, {
    path: "/maps/leaflet/boundary",
    component: _6d67602a,
    name: "maps-leaflet-boundary"
  }, {
    path: "/maps/leaflet/geometry",
    component: _6c29c71c,
    name: "maps-leaflet-geometry"
  }, {
    path: "/maps/leaflet/icons",
    component: _33d3516c,
    name: "maps-leaflet-icons"
  }, {
    path: "/maps/leaflet/markers",
    component: _392f6a29,
    name: "maps-leaflet-markers"
  }, {
    path: "/ecommerce/product-detail/:id?",
    component: _c015b7fa,
    name: "ecommerce-product-detail-id"
  }, {
    path: "/email/reademail/:id?",
    component: _023e1e18,
    name: "email-reademail-id"
  }, {
    path: "/",
    component: _760df188,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
