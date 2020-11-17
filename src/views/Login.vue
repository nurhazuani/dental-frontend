<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>

      <div class="col-md-6">
        <br /><br /><br /><br /><br /><br />
        <b-col cols="12">
          <b-card
            border-variant="success"
            header="Dental Self Appoinment Schedulling"
            align="center"
          >
            <form @submit.prevent="login">
              <div class="form-group">
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Email..."
                />
              </div>
              <div class="form-group">
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                />
              </div>

              <button type="submit" class="btn btn-primary">Login</button>
              <button class="btn btn-info" to="register">
                Create Account
              </button>
            </form>
          </b-card>
        </b-col>
      </div>

      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "login",
  data(){
    return{
      users: [],
      form:{
        email: "",
        password:""
      }
    }
  },
   mounted() {
    
      //  console.log(this.$store.getters.checkToken);
        this.login();
  //  this.$router.push('/ProfileCustomer')
  },

 methods:{
   login() {
      var email = this.form.email;
      var pwd = this.form.password;

      this.$http.get(`http://localhost:3000/users/login/${email}/${pwd}`).then(res => {
      this.users = res.data;
        console.log(res.data);
      });
      // this.$router.push('/ProfileCustomer')
      //  localStorage.setItem('token', res.data.token);
      // console.log(res)
    //    if (this.$store.getters.checkToken !== null) {
    //   this.$router.push("/ProfileCustomer");
    // }
    }
  
 }
};
</script>