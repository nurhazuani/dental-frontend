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

          <form @submit.prevent="handleSubmit">
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
                  v-model="uname"
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
                  v-model="fname"
                  placeholder="Enter Full Name"
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Enter Email"
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Enter Password"
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="repassword"
                placeholder="Re-enter Password"
              />

            </div>

            <button class="btn-lg btn-primary">
              Sign Up
            </button>
            <br />
            <div class="page-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ message }}
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
import axios from "axios"

export default {
  name: "register",
  data() {
    return {
      users: [],
      form: {
        uid: "",
        uname: "",
        fname: "",
        email: "",
        password: "",
        repassword: "",
      }
    }
  },

  methods: {
    async handleSubmit(){
      const response = await axios.post("register", {
        uname: this.uname,
        fname: this.fname,
        email: this.email,
        password: this.password,
        repassword: this.repassword
      });

      console.log(response);

      this.$router.push('/login');
    }
  }
};
</script>
