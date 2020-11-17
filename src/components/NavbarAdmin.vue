<template>
  <div>
       <b-navbar
      toggleable="lg"
      type="light"
      class="shadow-lg"
      style="background-color: #28a745;"
    >
      <b-button v-b-toggle.sidebar-footer class="fa fa-bars"></b-button>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button class="fa fa-sign-out" href="/Login">
            <router-link to="/Login"></router-link
          ></b-button>
          <!-- <b-nav-item> <router-link to="/Login">Logout</router-link></b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div align="left">
      <div align="right">
        <!-- <b-button v-b-toggle.sidebar-footer>Menu</b-button> -->
      </div>

      <b-sidebar
        id="sidebar-footer"
        aria-label="Sidebar with custom footer"
        no-header
        shadow
      >
        <template #footer="{ hide }">
          <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
            <strong class="mr-auto"></strong>
            <b-button
              size="sm"
              @click="hide"
              class="fa fa-window-close"
            ></b-button>
          </div>
        </template>
        <div class="px-3 py-2">
          <br><br>
          <div align="center">
         <img alt="Vue logo" src="../assets/img_avatar2.png" height="150" width="150" />
          </div><br>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="/profilestaff" active @click="hide"
                ><i class="fa fa-address-card" aria-hidden="true">
                  Profile</i
                ></b-nav-item
              >
              <b-nav-item href="/liststaff" @click="hide"
                ><i class="fa fa-tachometer" aria-hidden="true">
                  List Staff
                </i></b-nav-item
              >
              <b-nav-item href="/listappointmentadmin" @click="hide"
                ><i class="fa fa-book" aria-hidden="true">
                  Appointment</i
                ></b-nav-item
              >
              <b-nav-item href="/service" @click="hide"
                ><i class="fa fa-tasks" aria-hidden="true">
                  Service</i
                ></b-nav-item
              >

              <b-nav-item href="/doctorschedule" @click="hide"
                ><i class="fa fa-list-alt" aria-hidden="true">
                  Doctor Schedule</i
                ></b-nav-item
              >
              <b-nav-item href="/historyappointment" @click="hide"
                ><i class="fa fa-history" aria-hidden="true">
                  History Appointment</i
                ></b-nav-item
              >
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarAdmin",
};
</script>

<style scoped>

</style>
