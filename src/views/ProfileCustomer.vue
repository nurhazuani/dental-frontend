<template>
  <div>
    <NavbarCustomer />
    <br />

    <div class="container">
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
                >Username :
                <input
                  v-model="form.uid"
                  type="text"
                  class="form-control"
                  v-if="form.uname"
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
                  v-if="form.uname"
                />
                <span v-else> {{ staff.uname }} </span>
              </b-input-group>
            </div>
            <div class="form-group">
              <b-input-group
                >Email :
                <input
                  v-model="form.email"
                  type="text"
                  class="form-control"
                  v-if="form.uname"
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
                  v-if="form.uname"
                />
                <span v-else> {{ staff.phone }} </span>
              </b-input-group>
            </div>
            <b-button
              variant="info"
              type="submit"
              v-if="form.uname"
              @click="onHandLeUpdate()"
              >Update</b-button
            >
            <b-button
              variant="outline-secondary"
              type="submit"
              v-if="form.uname"
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
            <div class="form-group">
              <b-input-group
                >Password:
                <input
                  v-model="form.password"
                  type="text"
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
  </div>
</template>

<script>
import NavbarCustomer from "@/components/NavbarCustomer.vue";

export default {
  name: "profilecustomer",
  components: {
    NavbarCustomer
  },
  data() {
    return {
      hide: "",
      users: [],
      form: {
        id: "",
        uid: "ezza95",
        uname: "",
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
        uid: "jihyo88",
        uname: "",
        email: "",
        phone: "",
        password: ""
      };
    }
  }
};
</script>