<template>
  <div>
    <NavbarCustomer />
    <br />

    <div class="container">
      <div class="page-breadcrumb">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Information
            </li>
          </ol>
        </nav>
      </div>

      <div>
        <input v-model="form.UserUid" type="text" class="form-control" hidden />

        <div>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="300"
          >
            <!-- caption="First slide" -->
            <b-carousel-slide :img-src="require('../assets/image5.jpg')">
            </b-carousel-slide>
            <b-carousel-slide
              :img-src="require('../assets/image3.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              :img-src="require('../assets/image4.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <br /><br />

        <div>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <img
                  alt="Vue logo"
                  src="../assets/image1.jpg"
                  height="300"
                  width="550"
                />
              </b-col>
              <b-col md="6">
                <b-card-body
                  title="5 Foods and Drinks You Should Avoid after Whitening"
                >
                  <b-card-text>
                    Who doesn’t love the appearance of freshly whitened teeth?
                    Whether performed at home using do-it-yourself whiteners or
                    at the dentist’s by a well-trained professional, teeth
                    whitening has the potential to dramatically improve smile
                    aesthetics.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <br />
        <!-- </b-col> -->
        <b-container fluid class="p-4 bg-dark">
          <b-row>
            <b-col>
              <b-img
                thumbnail
                fluid
                alt="Image 1"
                :src="require('../assets/image6.jpg')"
                width="300"
                height="700"
              >
              </b-img>
            </b-col>
            <b-col>
              <b-img
                thumbnail
                fluid
                alt="Image 2"
                :src="require('../assets/image2.jpg')"
                width="300"
                height="600"
              >
              </b-img>
            </b-col>
            <b-col>
              <b-img
                thumbnail
                fluid
                alt="Image 3"
                :src="require('../assets/image7.png')"
                width="300"
                height="600"
              >
              </b-img>
            </b-col>
          </b-row>
        </b-container>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarCustomer from "@/components/NavbarCustomer.vue";

export default {
  components: {
    NavbarCustomer,
  },
  data() {
    return {
      users: [],
      appointments: [],
      form: {
        UserUid: "kim90",
      },
    };
  },
  mounted() {
    this.getListAppointment();
  },

  methods: {
    getListAppointment() {
      var uid = this.form.UserUid;
      this.$http
        .get(`http://localhost:3000/appointment/historycust/approve/${uid}`)
        .then((res) => {
          this.appointments = res.data;
          console.log(res.data);
        });
    },
  },
};
</script>