<template>
    <div id="container">
        <side-bar>
  <template slot="links">
    <sidebar-item
      :link="{
        name: 'Dashboards',
        icon: 'ni ni-shop text-primary',
      }"
    >
      <sidebar-item
        :link="{ name: 'Dashboard', path: '/dashboard' }"
      ></sidebar-item>
      <sidebar-item
        :link="{ name: 'Alternative', path: '/alternative' }"
      ></sidebar-item>
    </sidebar-item>

  </template>
</side-bar>

    </div>
</template>

<script>
export default {
    name:"Sidebar"
}
</script>