<template>
  <div>
   <NavbarAdmin />
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              List of Service Dental
            </li>
          </ol>
        </nav>
      </div>

      <b-col cols="12">
        <b-card
          align="left"
          bg-variant="grey"
          text-variant="black"
          header="Form Service"
        >
          <form align="center">
            <b-row>
              <b-col
                ><input
                  v-model="form.servicename"
                  type="text"
                  class="form-control"
                  placeholder="Service Name"
                />
              </b-col>
              <b-col>
                <b-button
                  variant="info"
                  type="submit"
                  v-if="form.id"
                  @click="onHandLeUpdate()"
                  >Update</b-button
                >
                <b-button
                  variant="outline-secondary"
                  type="submit"
                  v-if="form.id"
                  @click="onHandLeCancel()"
                  >Cancel</b-button
                >
                <b-button
                  variant="primary"
                  type="submit"
                  @click="onHandLeAdd()"
                  v-else
                  >Add</b-button
                >
              </b-col>
            </b-row>
            <br />
          </form>
        </b-card>
      </b-col>
      <br />
      <b-table-simple hover small caption-top responsive>
        <b-thead head-variant="dark">
          <b-tr>
            <!-- <b-th colspan="2">No</b-th> -->
            <b-th colspan="3">Name</b-th>
            <b-th>Action</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="service in services" :key="service.id">
          <b-tr>
            <!-- <b-td colspan="2">{{}}</b-td> -->
            <b-td colspan="3"> {{ service.servicename }} </b-td>
            <b-td>
              <b-btn variant="info" @click="onHandLeClickUpdate(service)">
                <span class="fa fa-edit"></span>
              </b-btn>
              <b-btn variant="danger" @click="onHandLeClickDelete(service.id)">
                <span class="fa fa-trash"></span>
              </b-btn>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>

import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  components: {
    NavbarAdmin
  },
  data() {
    return {
      hide: "",
      services: [],
      form: {
        servicename: ""
      }
    };
  },
  mounted() {
    this.getService();
  },

  methods: {
    getService() {
      this.$http.get("http://localhost:3000/service").then(res => {
        this.services = res.data;
      });
    },
    onHandLeAdd() {
      this.$http.post("http://localhost:3000/service", this.form).then(() => {
        this.form = {
          servicename: ""
        };
        this.getService();
      });
    },
    onHandLeUpdate() {
      this.$http
        .patch(`http://localhost:3000/service/${this.form.id}`, this.form)
        .then(() => {
          this.form = {
            servicename: ""
          };
          this.getService();
        });
    },
    onHandLeClickDelete(id) {
      this.$http.delete(`http://localhost:3000/service/${id}`).then(() => {
        this.form = {
          servicename: ""
        };
        this.getService();
      });
    },
    onHandLeClickUpdate(service) {
      this.form = service;
      this.getService();
    },

    onHandLeCancel() {
      this.form = {
        servicename: ""
      };
    }
  }
};
</script>