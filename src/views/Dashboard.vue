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
              <b-nav-item href="/" active @click="hide">Profile</b-nav-item>
              <b-nav-item href="/" @click="hide">Dashboard</b-nav-item>
              <b-nav-item href="/applyappointment" @click="hide"
                >Appointment</b-nav-item
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
            Dashboard
          </li>
        </ol>
      </nav>
    </div>

    <b-row>
      <b-col lg="6" class="pb-2"
        ><b-button variant="outline-warning"
          >Urgent Dental Care</b-button
        ></b-col
      >
      <b-col lg="6" class="pb-2"
        ><b-button variant="outline-warning">Special Care</b-button></b-col
      >
      <b-col lg="6" class="pb-2"
        ><b-button variant="outline-warning"
          >Oral Health Improvements</b-button
        ></b-col
      >
      <b-col lg="6" class="pb-2"
        ><b-button variant="outline-warning"
          >Minor Oral Surgery</b-button
        ></b-col
      >
    </b-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getdashboard();
  },

  methods: {
    getdashboard() {
      this.$http.get("http://localhost:3000/dashboard").then(res => {
        this.getdashboard = res.data;
      });
    }
  }
};
</script>
