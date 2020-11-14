<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6">
        <h1>Login to Dental Self-Appointment Schedulling</h1>
        <br />
        <br />
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Enter Email"
              required
            />
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
          <button @click="login" class="btn btn-primary" to="">Login</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    login: function() {
      console.log("Email: " + this.email)
      console.log("Password: " + this.password)
    }
  }
};
</script>
