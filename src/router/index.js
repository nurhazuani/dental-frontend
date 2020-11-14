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
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/liststaff",
    name: "Liststaff",

    component: () => import("../views/Liststaff.vue")
  },
  {
    path: "/service",
    name: "Service",

    component: () => import("../views/Service.vue")
  },
  {
    path: "/applyappointment",
    name: "Appointment",

    component: () => import("../views/Appointment.vue")
  },
  {
    path: "/listappointmentadmin",
    name: "ListAppointmentAdmin",

    component: () => import("../views/ListAppointmentAdmin.vue")
  },
  {
    path: "/listappointmentdoctor",
    name: "ListAppointmentDoctor",

    component: () => import("../views/ListAppointmentDoctor.vue")
  },
  {
    path: "/profilestaff",
    name: "ProfileStaff",

    component: () => import("../views/ProfileStaff.vue")
  },
  {
    path: "/profilecustomer",
    name: "ProfileCustomer",

    component: () => import("../views/ProfileCustomer.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/schedule",
    name: "Schedule",

    component: () => import("../views/Schedule.vue")
  },
  {
    path: "/listscheduleDoctor",
    name: "ListScheduleDoctor",

    component: () => import("../views/ListScheduleDoctor.vue")
  },
  {
    path: "/profile",
    name: "Profile",

    component: () => import("../views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
