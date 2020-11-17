<template>
  <div>
    <NavbarAdmin />
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              List of Appointment
            </li>
          </ol>
        </nav>
      </div>
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              <span class="fa fa-edit"> :: Update Dr Name </span>
            </li>
          </ol>
        </nav>
      </div>
      <input v-model="form.UserUid" type="text" class="form-control" hidden />
      <input v-model="form.id" type="text" class="form-control" hidden />
      <div v-if="form.id">
        <b-col cols="12">
          <b-card
            align="left"
            bg-variant="grey"
            text-variant="black"
            header="List of Doctor Name"
          >
            <form>
              <b-row align-content="center">
                <b-col>
                  <b-form-select
                    v-model="form.drName"
                    :options="users"
                    value-field="uname"
                    text-field="uname"
                  >
                  </b-form-select>
                </b-col>
                <b-col>
                  <b-button
                    variant="primary"
                    type="submit"
                    @click="onHandLeUpdate()"
                    >Submit</b-button
                  >
                  <b-button
                    variant="outline-secondary"
                    type="submit"
                    @click="onHandLeCancel()"
                    >Cancel</b-button
                  >
                </b-col>
              </b-row>
              <br />
            </form>
          </b-card>
        </b-col>
      </div>
      <!-- <br> -->
      <div>
        <b-table-simple hover small caption-top responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="2">Name</b-th>
              <b-th colspan="2">Contact</b-th>
              <b-th colspan="3">Service</b-th>
              <b-th>Time</b-th>
              <b-th colspan="2">Dr Name</b-th>
              <b-th>Status</b-th>
              <b-th>Action</b-th>
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
              <b-td colspan="2"> {{ listaptmnt.drName }} </b-td>
              <b-td> {{ listaptmnt.status }} </b-td>
              <b-td>
                <b-btn variant="info" @click="onHandLeClickUpdate(listaptmnt)">
                  <span class="fa fa-edit"></span>
                </b-btn>
              </b-td>
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
      hide: "",
      users: [],
      appointments: [],
      form: {
        UserUid: "",
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
      this.$http
        .get("http://localhost:3000/appointment/status/request")
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
    onHandLeUpdate() {
      var uid = this.form.UserUid;
      var id = this.form.id;
      this.$http
        .patch(`http://localhost:3000/appointment/${uid}/${id}`, this.form)
        .then(() => {
          this.form = {
            // UserUid:'',
            drName: "",
          };
          this.getListAppointment();
        });
    },

    onHandLeClickUpdate(listaptmnt) {
      this.form = listaptmnt;
      this.getListAppointment();
    },
    onHandLeCancel() {
      this.form = {
         UserUid: "",
         drName: "",
      };
    }
  },
};
</script>