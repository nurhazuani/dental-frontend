<template>
  <div>
    <NavbarCustomer />
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
import NavbarCustomer from "@/components/NavbarCustomer.vue";

export default {
  components: {
    NavbarCustomer
  },
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