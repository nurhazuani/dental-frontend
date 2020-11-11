<template>
  <div class="container">
    <div align="left">
      <div align="right">
        <b-button v-b-toggle.sidebar-footer>Menu</b-button>
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
            <b-button size="sm" @click="hide">Close</b-button>
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
              <b-nav-item href="/profilestaff" active @click="hide"
                >Profile</b-nav-item
              >
              <b-nav-item href="/listappointmentdoctor" @click="hide"
                >Appointment</b-nav-item
              >
              <b-nav-item href="/applyLeave" @click="hide"
                >Hisory Appointment</b-nav-item
              >
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
    </div>
    <br />
    <div class="page-breadcrumb">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            List of Appointment
          </li>
        </ol>
      </nav>
    </div>
    <input v-model="form.drName" type="text" class="form-control" hidden />
  
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr @change="onHandLeClickUpdate(listaptmnt)">
          <b-th colspan="2">Name</b-th>
          <b-th colspan="2">Contact</b-th>
          <b-th colspan="3">Service</b-th>
          <b-th>Status</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-for="listaptmnt in appointments" :key="listaptmnt.id">
        <b-tr>
          <b-td colspan="2"
            ><p v-if="listaptmnt.User">{{ listaptmnt.User.uname }}</p>
          </b-td>
          <b-td colspan="2">
            <p v-if="listaptmnt.User">{{ listaptmnt.User.email }}</p>
            <p v-if="listaptmnt.User">{{ listaptmnt.User.phone }}</p>
          </b-td>
          <b-td colspan="3">{{ listaptmnt.service }}</b-td>
          <b-td> {{ listaptmnt.status }} </b-td>
          <b-td>
            <b-button variant="info" @click="onHandLeClickUpdate(listaptmnt)"
              >Show Detail</b-button
            >
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <b-modal id="modal-list-appointment" @hidden="onHandleCancel">
      <b-form>
        <b-form-group >
          <input v-model="form.UserUid" hidden />
          <input v-model="form.id" hidden />
        </b-form-group>

        <b-form-group label="Service: ">
          <b-form-input v-model="form.service" disabled />
        </b-form-group>

        <b-form-group label="Date&Time: ">
          <b-form-input v-model="form.date" disabled />
          <b-form-input v-model="form.time" disabled />
        </b-form-group>

        <b-form-group label="Action: ">
          <b-form-select v-model="form.status" :options="['Approve', 'Reject']">
          </b-form-select>
        </b-form-group>
      </b-form>

      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button @click="onHandleCancel">Cancel</b-button>

          <b-button
            variant="info"
            class="float-right"
             type="submit"
            v-if="form.id"
            @click="onHandLeUpdate()"
          >
            Submit
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: "",
      users: [],
      appointments: [],
      form: {
        UserUid: "",
        status: "",
        drName: "wani"
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
        .get(`http://localhost:3000/appointment/drname/${drname}`)
        .then(res => {
          this.appointments = res.data;
          console.log(res.data);
        });
    },

    onClickAdd() {
      this.$bvModal.show("modal-list-appointment");
    },

    onHandLeUpdate() {
      var uid = this.form.UserUid;
      var id = this.form.id;

      this.$http
        .patch(`http://localhost:3000/appointment/${uid}/${id}`, this.form)
        .then(() => {
          this.form = {
            status: ""
          };
          this.$bvModal.hide("modal-list-appointment");
          this.getListAppointment();
        });
    },

    onHandLeClickUpdate(listaptmnt) {
      this.form = listaptmnt;
      this.$bvModal.show("modal-list-appointment");
    },

    onHandleCancel() {
      this.form = {
        status: "",
        drName: "wani"
      };
      this.$bvModal.hide("modal-list-appointment");
    }
  }
};
</script>