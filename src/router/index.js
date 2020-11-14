import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../views/Register.vue")
  },
  {
    path: "/liststaff",
    name: "Liststaff",
    
    component: () =>
    import("../views/Liststaff.vue")
  },
  {
    path: "/service",
    name: "Service",
   
    component: () =>
    import("../views/Service.vue")
  },
  {
    path: "/applyappointment",
    name: "Appointment",
  
    component: () =>
    import("../views/Appointment.vue")
  },
  {
    path: "/listappointmentadmin",
    name: "ListAppointmentAdmin",
  
    component: () =>
    import( "../views/ListAppointmentAdmin.vue")
  },
  {
    path: "/listappointmentdoctor",
    name: "ListAppointmentDr",
  
    component: () =>
    import( "../views/ListAppointmentDr.vue")
  },
  {
    path: "/historyappointment",
    name: "HistoryAppointment",
  
    component: () =>
    import( "../views/HistoryAppointment.vue")
  },
  {
    path: "/historyappointmentdr",
    name: "HistoryApptDr",
  
    component: () =>
    import( "../views/HistoryApptDr.vue")
  },
  {
    path: "/historyappointmentcust",
    name: "HistoryApptCust",
  
    component: () =>
    import( "../views/HistoryApptCust.vue")
  },
  {
    path: "/profilestaff",
    name: "ProfileStaff",
  
    component: () =>
    import( "../views/ProfileStaff.vue")
  },
  {
    path: "/profilecustomer",
    name: "ProfileCustomer",
  
    component: () =>
    import( "../views/ProfileCustomer.vue")
  },
  {
    path: "/profiledoctor",
    name: "ProfileDr",
  
    component: () =>
    import( "../views/ProfileDr.vue")
  },
  {
    path: "/doctorschedule",
    name: "ScheduleDr",
  
    component: () =>
    import( "../views/ScheduleDr.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  
    component: () =>
    import( "../views/Dashboard.vue")
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
