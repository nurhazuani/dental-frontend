<template>
  <div>
    <NavbarAdmin />
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              List of Staff
            </li>
          </ol>
        </nav>
      </div>
      <input
        v-model="form.password"
        type="text"
        class="form-control"
        placeholder="Staff ID"
        hidden
      />
      <input
        v-model="form.role"
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
          header="Form Register Staff"
        >
          <form>
            <b-row align-content="center">
              <b-col>
                <input
                  v-model="form.uid"
                  type="text"
                  class="form-control"
                  placeholder="Staff ID"
                  @keydown.space.prevent
                />
              </b-col>
              <b-col>
                <input
                  v-model="form.uname"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                />
              </b-col>
              <b-col>
                <b-form-select
                  lable="Position"
                  v-model="form.position"
                  :options="['Doctor', 'Staff']"
                >
                </b-form-select>
              </b-col>

              <b-col>
                <b-button variant="primary" type="submit" @click="onHandLeAdd()"
                  >Add</b-button
                >
              </b-col>
            </b-row>
            <br />
          </form>
        </b-card>
      </b-col>

      <br />
      <b-table-simple hover small caption-top responsive>
        <b-thead head-variant="dark">
          <b-tr>
            <b-th colspan="2">Staff ID</b-th>
            <b-th colspan="3">Name</b-th>
            <b-th colspan="2">Position</b-th>
            <b-th>Phone</b-th>
            <b-th>Email</b-th>
            <b-th>Action</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="staff in users" :key="staff.uid">
          <b-tr>
            <b-td colspan="2">{{ staff.uid }}</b-td>
            <b-td colspan="3">{{ staff.uname }} </b-td>
            <b-td colspan="2">{{ staff.position }}</b-td>

            <b-td> {{ staff.phone }} </b-td>
            <b-td> {{ staff.email }} </b-td>
            <b-td>
              <b-btn variant="danger" @click="onHandLeClickDelete(staff.uid)">
                <span class="fa fa-trash"></span>
              </b-btn>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>

import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
    components: {
    NavbarAdmin
  },
  data() {
    return {
      hide: "",
      users: [],
      form: {
        uid: "",
        uname: "",
        password: "123bc",
        position: "",
        role: "Staff"
      }
    };
  },
  mounted() {
    this.getStaff();
  },

  methods: {
    getStaff() {
      var role = this.form.role;

      this.$http.get(`http://localhost:3000/users/role/${role}`).then(res => {
        this.users = res.data;
        console.log(res.data);
      });
    },
    getUser() {
      this.$http.get("http://localhost:3000/users").then(res => {
        this.users = res.data;
      });
    },
    onHandLeAdd() {
      this.$http.post("http://localhost:3000/users", this.form).then(() => {
        this.form = {
          uid: "",
          uname: "",
          password: "",
          position: "",
          role: ""
        };
        this.getStaff();
      });
    },

    onHandLeClickDelete(uid) {
      this.$http.delete(`http://localhost:3000/users/${uid}`).then(() => {
        this.form = {
          uid: "",
          uname: "",
          password: "123abc",
          position: "",
          role: "Staff"
        };
        this.getStaff();
      });
    }
  }
};
</script>