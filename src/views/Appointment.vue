<template>
  <div>
    <!-- <Navbar /> -->
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
              <b-nav-item href="/profilecustomer" active @click="hide"
                ><i class="fa fa-address-card" aria-hidden="true">
                  Profile</i
                ></b-nav-item
              >
              <b-nav-item href="/" @click="hide"
                ><i class="fa fa-tachometer" aria-hidden="true">
                  Dashboard
                </i></b-nav-item
              >
              <b-nav-item href="/applyappointment" @click="hide"
                ><i class="fa fa-book" aria-hidden="true">
                  Appoinment</i
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
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Form Appointment
            </li>
          </ol>
        </nav>
      </div>

      <br />
      <input
        v-model="form.UserUid"
        type="text"
        class="form-control"
        placeholder="Staff ID"
        hidden
      />
      <input
        v-model="form.id"
        type="text"
        class="form-control"
        placeholder="..."
        hidden
      />
      <input
        v-model="form.status"
        type="text"
        class="form-control"
        placeholder="..."
        hidden
      />

      <b-col cols="12">
        <b-card
          align="left"
          bg-variant="grey"
          text-variant="black"
          header="Form Appoinment"
        >
          <!-- <h2>Register User</h2> -->
          <form>
            <b-row align-content="center">
              <b-col>
                <b-form-select
                  v-model="form.service"
                  :options="services"
                  value-field="servicename"
                  text-field="servicename"
                >
                </b-form-select>
              </b-col>

              <b-col>
                <b-form-datepicker
                  id="datepicker-sm"
                  size="sm"
                  locale="en"
                  class="mb-2"
                  v-model="form.date"
                ></b-form-datepicker>
              </b-col>

              <b-col>
                <b-form-select
                  v-model="form.time"
                  :options="[
                    '9:00AM',
                    '10:00AM',
                    '11:00AM',
                    '12:00PM',
                    '2:00PM ',
                    '3:00PM',
                    '4:00PM',
                    '5:00PM'
                  ]"
                >
                </b-form-select>
              </b-col>

              <b-col>
                <b-button
                  variant="info"
                  type="submit"
                  v-if="form.id"
                  @click="onHandLeUpdate()"
                  >Update</b-button
                >
                <b-button
                  variant="outline-secondary"
                  type="submit"
                  v-if="form.id"
                  @click="onHandLeCancel()"
                  >Cancel</b-button
                >
                <b-button
                  variant="primary"
                  type="submit"
                  @click="onHandLeAdd()"
                  v-else
                  >Add</b-button
                >
              </b-col>
            </b-row>
            <br />
          </form>
        </b-card>
      </b-col>

      <br />
      <b-nav tabs justified>
        <b-nav-item active>List Appointment</b-nav-item>
        <b-nav-item>History</b-nav-item>
      </b-nav>
      <br />
      <b-table-simple hover small caption-top responsive>
        <b-thead head-variant="dark">
          <b-tr>
            <b-th colspan="2">Service</b-th>
            <b-th colspan="3">Date</b-th>
            <b-th colspan="2">Time</b-th>
            <b-th>Satus</b-th>
            <b-th>Action</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="cust in appointments" :key="cust.id">
          <b-tr>
            <b-td colspan="2">{{ cust.service }}</b-td>
            <b-td colspan="3">{{ cust.date }} </b-td>
            <b-td colspan="2">{{ cust.time }}</b-td>
            <b-td> {{ cust.status }} </b-td>
            <b-td>
              <b-btn variant="info" @click="onHandLeClickUpdate(cust)">
                <span class="fa fa-edit"></span>
              </b-btn>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: "",
      users: [],
      services: [],
      appointments: [],
      form: {
        UserUid: "kim90",
        service: "",
        date: "",
        time: "",
        status: "Request",
        role: "customer"
      },
      value: ""
    };
  },
  mounted() {
    this.getAppointment();
    this.loadAllService();
  },

  methods: {
    getAppointment() {
      var uid = this.form.UserUid;
      this.$http.get(`http://localhost:3000/appointment/${uid}`).then(res => {
        this.appointments = res.data;
        console.log(res.data);
      });
    },

    getUser() {
      //kejap
      var uid = this.form.uid;
      this.$http.get(`http://localhost:3000/users/${uid}`).then(res => {
        this.users = res.data;
      });
    },
    loadAllService() {
      this.$http.get("http://localhost:3000/service").then(res => {
        this.services = res.data;
      });
    },

    onHandLeAdd() {
      var uid = this.form.UserUid;
      this.$http
        .post(`http://localhost:3000/appointment/${uid}`, this.form)
        .then(() => {
          this.form = {
            service: "",
            date: "",
            time: "",
            status: "Request"
          };
          this.getAppointment();
        });
    },

    onHandLeUpdate() {
      var uid = this.form.UserUid;
      var id = this.form.id;
      this.$http
        .patch(`http://localhost:3000/appointment/${uid}/${id}`, this.form)
        .then(() => {
          this.form = {
            uid: "",
            service: "",
            date: "",
            time: "",
            status: "",
            role: "Request"
          };
          this.getAppointment();
        });
    },

    onHandLeClickUpdate(cust) {
      this.form = cust;
      this.getAppointment();
    },

    onHandLeClickDelete(id) {
      var uid = this.form.UserUid;
      this.$http
        .delete(`http://localhost:3000/appointment/${uid}/${id}`)
        .then(() => {
          this.form = {
            UserUid: "",
            service: "",
            date: "",
            time: "",
            status: "Request",
            role: "customer"
          };
          this.getAppointment();
        });
    },
    onHandLeCancel() {
      this.form = {
        service: "",
        date: "",
        time: "",
        status: "Request"
      };
    }
  }
};
</script>