import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/liststaff",
    name: "Liststaff",
    // component: Liststaff,
    component: () =>
    import(/* webpackChunkName: "liststaff" */ "../views/Liststaff.vue")
  },
  {
    path: "/service",
    name: "Service",
    // component: Liststaff,
    component: () =>
    import(/* webpackChunkName: "liststaff" */ "../views/Service.vue")
  },
  {
    path: "/applyappointment",
    name: "Appointment",
    // component: Liststaff,
    component: () =>
    import(/* webpackChunkName: "liststaff" */ "../views/Appointment.vue")
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
