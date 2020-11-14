<template>
  <div class="container">
    <b-row class="mt-5 d-flex justify-content-center">
      <b-col cols="6">
        <b-card
          align="center"
          bg-variant="grey"
          text-variant="black"
          header="User Registration"
        >
          <!-- <h2>User Registration</h2> -->

          <form>
            <input
              v-model="form.role"
              type="text"
              class="form-control"
              placeholder="role"
              hidden
            />

            <div class="form-group">
              <b-input-group
                ><input
                  type="username"
                  class="form-control"
                  id="username"
                  v-model="username"
                  required
                  placeholder="Enter Username"
                  @keydown.space.prevent
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  type="text"
                  class="form-control"
                  id="fullname"
                  v-model="fullname"
                  required
                  placeholder="Enter Full Name"
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Enter Email"
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                required
                placeholder="Enter Password"
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="repassword"
                v-model="rePassword"
                required
                placeholder="Re-enter Password"
              />
              <div v-if="password != repassword" class="text-danger">
                Sorry, password is not match
              </div>
            </div>

            <button @click="Register" class="btn-lg btn-primary">
              Register
            </button>
            <br />
            <div class="page-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ meesage }}
                  </li>
                </ol>
              </nav>
            </div>
          </form>
        </b-card>
      </b-col>

      <!-- <b-row class="mt-5 d-flex justify-content-center"> -->
    </b-row>
    <!-- </b-row> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      users: [],
      form: {
        uid: "",
        uname: "",
        email: "",
        password: "",
        repassword: "",
        role: "customer"
      }
    };
  },

  mounted() {
    this.getUser(); //call back method todos
  },

  methods: {
    register: function() {
      console.log("Email: " + this.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.user);
        })
        .catch(function(error) {
          alert("Unable to register user: " + error.message);
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
          email: "",
          password: "",
          repassword: "",
          role: ""
        };
        this.getUser();
      });
    }
  }
};
</script>
