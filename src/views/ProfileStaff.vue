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
              <b-nav-item href="/Liststaff" active @click="hide"
                >List Staff</b-nav-item
              >
              <b-nav-item href="/listappointmentadmin" @click="hide"
                >Appoinment</b-nav-item
              >
              <b-nav-item href="/applyLeave" @click="hide">Service</b-nav-item>
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
          <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>
    </div>

    <b-col cols="12">
      <b-card
        align="left"
        bg-variant="grey"
        text-variant="black"
        header="Profile Detail"
        v-for="staff in users"
        :key="staff.uid"
      >
        <form>
          <div class="form-group">
            <b-input-group
              >Staff ID :
              <input
                v-model="form.uid"
                type="text"
                class="form-control"
                v-if="form.position"
                disabled
              />
              <span v-else> {{ staff.uid }} </span>
            </b-input-group>
          </div>
          <div class="form-group">
            <b-input-group
              >Name :
              <input
                v-model="form.uname"
                type="text"
                class="form-control"
                v-if="form.position"
                disabled
              />
              <span v-else> {{ staff.uname }} </span>
            </b-input-group>
          </div>

          <div class="form-group">
            <b-input-group
              >Position :
              <input
                v-model="form.position"
                type="text"
                class="form-control"
                v-if="form.position"
                disabled
              />
              <span v-else> {{ staff.position }} </span>
            </b-input-group>
          </div>

          <div class="form-group">
            <b-input-group
              >Email :
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                v-if="form.position"
              />
              <span v-else> {{ staff.email }} </span>
            </b-input-group>
          </div>

          <div class="form-group">
            <b-input-group
              >Phone No. :
              <input
                v-model="form.phone"
                type="text"
                class="form-control"
                v-if="form.position"
              />
              <span v-else> {{ staff.phone }} </span>
            </b-input-group>
          </div>
          <b-button
            variant="info"
            type="submit"
            v-if="form.position"
            @click="onHandLeUpdate()"
            >Update</b-button
          >
          <b-button
            variant="outline-secondary"
            type="submit"
            v-if="form.position"
            @click="onHandLeCancel()"
            >Cancel</b-button
          >
          <b-button variant="primary" @click="onHandLeClickUpdate(staff)"
            >Edit</b-button
          >
        </form>
      </b-card>
    </b-col>

    <b-col cols="12" v-if="form.uname">
      <b-card
        align="left"
        bg-variant="grey"
        text-variant="black"
        header="Update Password"
        v-for="staff in users"
        :key="staff.uid"
      >
        <form>
          <!-- <div class="form-group">
                            <b-input-group>Email : <input
                                        v-model="form.password"
                                        type="text"
                                        class="form-control"
                                        />
                            </b-input-group>
                            </div> -->

          <div class="form-group">
            <b-input-group
              >Password:
              <input
                v-model="form.password"
                type="password"
                class="form-control"
              />
            </b-input-group>
          </div>
          <b-button
            variant="info"
            type="submit"
            v-if="form.uname"
            @click="onHandLeUpdate()"
            >Change</b-button
          >
          <b-button
            variant="outline-secondary"
            type="submit"
            v-if="form.uname"
            @click="onHandLeCancel()"
            >Cancel</b-button
          >
        </form>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: "",
      users: [],
      form: {
        id: "",
        uid: "AT2",
        uname: "",
        position: "",
        email: "",
        phone: "",
        password: ""
      }
    };
  },
  mounted() {
    this.getStaff();
  },

  methods: {
    getStaff() {
      var uid = this.form.uid;

      this.$http.get(`http://localhost:3000/users/${uid}`).then(res => {
        this.users = res.data;
        console.log(res.data);
      });
    },

    onHandLeUpdate() {
      var uid = this.form.uid;
      this.$http
        .patch(`http://localhost:3000/users/${uid}`, this.form)
        .then(() => {
          this.form = {
            uid: "",
            uname: "",
            position: "",
            email: "",
            phone: ""
          };
          this.getStaff();
        });
    },

    onHandLeClickUpdate(staff) {
      this.form = staff;
      this.getStaff();
    },

    onHandLeCancel() {
      this.form = {
        uid: "AT2",
        uname: "",
        position: "",
        email: "",
        phone: "",
        password: ""
      };
    }
  }
};
</script>
