<template>

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
</template>

<script>

export default {
  name: "Table",
  data() {
    return {
      hide: "",
      users: [],
      services: [],
      appointments: [],
      form: {
        UserUid: "azi11",
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
      this.$http.get(`http://localhost:3000/appointment/historycust/reject/${uid}`).then(res => {
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