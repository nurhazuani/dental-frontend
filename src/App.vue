<template>
  <div id="app">
  <div class="container">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
        <!-- <Navbar /> -->
        <!-- <Sidebar /> -->
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" type="text/javascript">
        <link href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
        <link href="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js">
      </head>
     
  </div>
    <router-view />
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
// import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
    components: {
    // Navbar,
  },
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
