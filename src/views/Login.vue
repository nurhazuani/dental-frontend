<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6">
        <h1>Login to Dental Self-Appointment Schedulling</h1>
        <br />
        <br />
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              type="email"
              class="form-control"

              v-model="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="password"
              required
              placeholder="Enter Password"
            />
          </div>
          <button @click="login" class="btn btn-primary" to="">Login</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "login",
  data() {
    return {
        email: "",
        password: ""
    };
 },

  methods: {
    async handleSubmit(){
      const response = await axios.ppost('login', {
          email: this.email,
          password: this.password
      });

      localStorage.setItem('token', response.data.token);
      this.$router.push('/dashboard');
    }
  }
};
</script>
