<template>
  <div class="container">
    <b-row class="mt-5 d-flex justify-content-center">
      <b-col cols="6">
        <b-card
          align="center"
          bg-variant="grey"
          text-variant="black"
          header="Register User"
        >
          <!-- <h2>Register User</h2> -->

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
                  v-model="form.uid"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  @keydown.space.prevent
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  v-model="form.uname"
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  required
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  v-model="form.email"
                  type="text"
                  class="form-control"
                  placeholder="Email..."
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  v-model="form.phone"
                  type="text"
                  class="form-control"
                  placeholder="Phone. No"
                  required
                />
              </b-input-group>
            </div>

            <div class="form-group">
              <b-input-group
                ><input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="confirm password"
                  required
                />
              </b-input-group>
            </div>
            <b-button
              block
              variant="primary"
              type="submit"
              @click="onHandLeAdd()"
              >Register User</b-button
            >
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
export default {
  name: "Register",
  data() {
    return {
      users: [],
      form: {
        uid: "",
        uname: "",
        email: "",
        phone:"",
        password: "",
        role: "customer"
      }
    };
  },
  mounted() {
    this.getUser(); //call back method todos
  },

  methods: {
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
          phone:"",
          password: "",
          role: ""
        };
        this.getUser();
      });
      console.log("success")
      // this.$router.push('/login')
    }
  }
};
</script>