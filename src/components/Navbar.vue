<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      class="shadow-lg"
      style="background-color: black;"
    >
     <b-button v-b-toggle.sidebar-footer>Menu</b-button>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
         
          <b-nav-item> <router-link to="/Login">Logout</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

</style>
