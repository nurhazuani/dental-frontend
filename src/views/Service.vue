<template>
  <div class="container">
   
    <div align="left">
    <div align="right">

    <b-button v-b-toggle.sidebar-footer>Menu</b-button> </div>
      
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      <template #footer="{ hide }">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto"></strong>
        <b-button size="sm" @click="hide">Close</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
           <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Profile</b-nav-item>
              <b-nav-item href="/Liststaff" active @click="hide">List Staff</b-nav-item>
              <b-nav-item href="/applyLeave" @click="hide">Appoinment</b-nav-item>
              <b-nav-item href="/applyLeave" @click="hide">Service</b-nav-item>
               <b-nav-item href="/applyLeave" @click="hide">Sechedule</b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
    </div>
<br>
                            <div class="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page">List of Service Dental</li>
                                    </ol>
                                </nav>
                            </div>
                      

              <b-row class="mt-5 d-flex justify-content-center">
              <b-col cols="12">
                <b-card align="left" bg-variant="grey" text-variant="black"
              >
                <b-row>
                 
                    <b-col align="left"> Service </b-col>
                    <b-col align="center">   Action </b-col>
                </b-row>

                <form   v-for="(service) in services"
                :key = "service.id"> 
                  <b-row>
                    <b-col align="left">   {{ service.servicename }} </b-col>
                    <b-col align="right">  
                    <b-btn variant="info"   @click="onHandLeClickUpdate(service)" > 
                    <span class="fa fa-edit" ></span>
                    </b-btn>
                    <b-btn variant="danger"  @click="onHandLeClickDelete(service.id)">
                    <span class="fa fa-trash"></span>
                    </b-btn>
                    </b-col>
                  </b-row>
                  </form>
                </b-card>
              </b-col>
              </b-row>
            <!-- </b-row> -->
  </div>
</template>

<script>
export default {
   data(){
     return{
       services:[],
       form: {
          servicename: '',
       },
      
     }
   },
    mounted(){
          this.getService() 
      },

       methods: {
            getService(){
                  this.$http.get('http://localhost:3000/service')
                      .then(res => {
                          this.services = res.data
                      })
            },
            onHandLeUpdate(){
              this.$http.patch(`http://localhost:3000/service/${this.form.id}`, this.form)
                                  .then(() => {
                                      this.form ={
                                       servicename: '',
                                      }
                                   this.getService() 
                                  })  
            },
            onHandLeClickDelete(id){
              this.$http.delete(`http://localhost:3000/service/${id}`) 
                              .then(() => {
                                this.form ={
                                       servicename: '',
                                }
                                    this.getService() 
                                  })               
            },
            onHandLeClickUpdate(service){
            this.form = service
           this.getService() 
            },

            onHandLeCancel(){
                  
                                this.form ={
                                 servicename: '',
                                }
                
          }
      },
      
 

}
</script>