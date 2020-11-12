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
          <b-img
            src="https://picsum.photos/500/500/?image=54"
            fluid
            thumbnail
          ></b-img>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="/profiledoctor" active @click="hide"
                ><i class="fa fa-address-card" aria-hidden="true">
                  Profile</i
                ></b-nav-item
              >
             
              <b-nav-item href="/listappointmentdoctor" @click="hide"
                ><i class="fa fa-book" aria-hidden="true">
                  Appointment</i
                ></b-nav-item
              >
              
              <b-nav-item href="/historyappointmentdr" @click="hide"
                ><i class="fa fa-history" aria-hidden="true">
                  History Appointment</i
                ></b-nav-item
              >
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
    </div>
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              History Appointment
            </li>
          </ol>
        </nav>
      </div>

      <div>
      <input v-model="form.drName" type="text" class="form-control" hidden />

        <b-table-simple hover small caption-top responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="2">Name</b-th>
              <b-th colspan="2">Contact</b-th>
              <b-th colspan="3">Service</b-th>
              <b-th>Time</b-th>
              <!-- <b-th colspan="2">Dr Name</b-th> -->
              <b-th>Status</b-th>
            </b-tr>
          </b-thead>
          <b-tbody v-for="listaptmnt in appointments" :key="listaptmnt.id">
            <b-tr>
              <b-td colspan="2">
                <p v-if="listaptmnt.User">{{ listaptmnt.User.uname }}</p>
              </b-td>
              <b-td colspan="2">
                <p>{{ listaptmnt.User.email }}</p>
                <p>{{ listaptmnt.User.phone }}</p>
              </b-td>
              <b-td colspan="3">{{ listaptmnt.service }}</b-td>
              <b-td
                ><p>{{ listaptmnt.date }}</p>
                <p>{{ listaptmnt.time }}</p>
              </b-td>
              <!-- <b-td colspan="2"> {{ listaptmnt.drName }} </b-td> -->
              <b-td> {{ listaptmnt.status }} </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: "",
      users: [],
      appointments: [],
      form:{
          drName: 'Nurhazuani Nurdin'
      }
    };
  },
  mounted() {
    this.getListAppointment();
  },

  methods: {
     getListAppointment() {
      var drname = this.form.drName;
      this.$http
        .get(`http://localhost:3000/appointment/history/request/${drname}`)
        .then(res => {
          this.appointments = res.data;
          console.log(res.data);
        });
    },
  }
};
</script>