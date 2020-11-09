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
              <b-nav-item href="/Liststaff" active @click="hide"
                >Profile</b-nav-item
              >
              <b-nav-item href="/listappointmentadmin" @click="hide"
                >Appointment</b-nav-item
              >
              <b-nav-item href="/applyLeave" @click="hide"
                >Sechedule</b-nav-item
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
    <!-- <input
                                 v-model="form.id"
                                type="text"
                                class="form-control"
                                /> -->
    <b-table-simple hover small caption-top responsive>
      <b-thead head-variant="dark">
        <b-tr @change="onHandLeClickUpdate(listaptmnt)">
          <b-th colspan="2">Name</b-th>
          <b-th colspan="2">Contact</b-th>
          <b-th colspan="3">Service</b-th>
          <b-th colspan="2">Dr Name</b-th>
          <b-th>Time</b-th>
          <b-th>Status</b-th>
          <b-th>Action</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-for="listaptmnt in appointments" :key="listaptmnt.id" >
         <b-tr>
       <p>hai</p>
          
        </b-tr>
        <b-tr>
          <!-- <b-td colspan="3">
            <p><input v-model="form.id" type="text" class="form-control" /></p>
            <p> {{ listaptmnt.id }}</p>
            <p><input v-model="form.UserUid" type="text" class="form-control" /></p>
              <p> {{ listaptmnt.UserUid }}</p>
            </b-td> -->
          <b-td colspan="2"
            ><p v-if="listaptmnt.User">{{ listaptmnt.User.uname }}</p>
          </b-td>
          <b-td colspan="2">
            <p v-if="listaptmnt.User">{{ listaptmnt.User.email }}</p>
            <p v-if="listaptmnt.User">{{ listaptmnt.User.phone }}</p>
          </b-td>
          <b-td colspan="3">{{ listaptmnt.service }}</b-td>
          <b-td colspan="2"> {{ listaptmnt.drName }} </b-td>
          <b-td
            ><p>{{ listaptmnt.date }}</p>
            <p>{{ listaptmnt.time }}</p>
          </b-td>
          <b-td> {{ listaptmnt.status }} </b-td>
          <b-td>
            <b-button
              v-model="form.status"
              variant="info"
              type="submit"
             @click="onHandLeClickUpdate(listaptmnt)"
              >Show Detail</b-button
            >
          </b-td>
        </b-tr>
       
      </b-tbody>
    </b-table-simple>
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
      },
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

    onHandLeUpdate() {
      var uid = this.form.UserUid;
      var id = this.form.id;
      //     var uid = this.listaptmnt.UserUid
      // id = this.listaptmnt.id
     
      this.$http
        .patch(`http://localhost:3000/appointment/${uid}/${id}`, this.form)
        .then(() => {
          this.form = {
            status: ""
          };
          this.getListAppointment();
        });
    },

    onHandLeClickUpdate(listaptmnt) {
      this.form = listaptmnt;
      this.getListAppointment();
    }
  }
};
</script>