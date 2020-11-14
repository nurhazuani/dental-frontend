<template>
  <div>
    <NavbarAdmin />
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Doctor Schedule
            </li>
          </ol>
        </nav>
      </div>

      <div>
        <b-form-select
          v-model="form.drName"
          :options="users"
          value-field="uname"
          text-field="uname"
          @change="getListAppointment"
        >
        </b-form-select>
        <br /><br />
        <b-table-simple hover small caption-top responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="2">Name</b-th>
              <b-th colspan="3">Service</b-th>
              <b-th>Date</b-th>
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

              <b-td colspan="3">{{ listaptmnt.service }}</b-td>
              <b-td
                ><p>{{ listaptmnt.date }}</p>
              </b-td>
              <b-td>
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
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  components: {
    NavbarAdmin,
  },
  data() {
    return {
      users: [],
      appointments: [],
      form: {
        drName: "",
      },
    };
  },
  mounted() {
    this.getListAppointment();
    this.getPosition();
  },

  methods: {
    getListAppointment() {
      var drname = this.form.drName;
      this.$http
        .get(`http://localhost:3000/appointment/history/approve/${drname}`)
        .then((res) => {
          this.appointments = res.data;
          console.log(res.data);
        });
    },
    getPosition() {
      this.$http
        .get("http://localhost:3000/users/position/doctor")
        .then((res) => {
          this.users = res.data;
        });
    },
  },
};
</script>