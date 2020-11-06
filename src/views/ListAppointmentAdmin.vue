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
              <b-nav-item href="/listappointmentadmin" @click="hide">Appoinment</b-nav-item>
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
                                        <li class="breadcrumb-item active" aria-current="page">List of Appointment</li>
                                    </ol>
                                </nav>
                            </div>
                             <input
                                v-model="form.UserUid"
                                type="text"
                                class="form-control"
                                hidden
                                /> 
                                <input
                                 v-model="form.id"
                                type="text"
                                class="form-control"
                                hidden
                                />
              <div v-if="form.id">
              <b-col cols="12">
                <b-card align="left" bg-variant="grey" text-variant="black" header="List of Doctor Name">
                <form  > 
                  <b-row align-content="center">
                  <b-col>   
                    <b-form-select 
                        v-model="form.drName"
                        :options="users"
                        value-field="uname" 
                        text-field="uname"
                      >
                      </b-form-select>
                  </b-col>
                  <b-col>
                          <b-button variant="primary" type="submit"  @click="onHandLeUpdate()">Submit</b-button>
                  </b-col>
                    </b-row>
                      <br>
                  </form>
                </b-card>
              </b-col>
              </div>
        <!-- <br> -->
        <div>
        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
              <b-tr>
                <b-th colspan="2">Name</b-th>
                <b-th colspan="2">Contact</b-th>
                <b-th colspan="3">Service</b-th>
                <b-th colspan="2">Dr Name</b-th>
                <b-th >Time</b-th>
                <b-th >Status</b-th>
                <b-th >Action</b-th>
              </b-tr>
            </b-thead>
            <b-tbody   v-for="listaptmnt in appointments" :key="listaptmnt.id"> 
              <b-tr>
                <b-td colspan="2"> <p v-if="listaptmnt.User">{{ listaptmnt.User.uname }} </p> </b-td>
                <b-td colspan="2"> <p>{{ listaptmnt.User.email }} </p>
                        <p>{{ listaptmnt.User.phone }} </p>
                </b-td>
                <b-td  colspan="3">{{ listaptmnt.service }}</b-td>
                <b-td  colspan="2"> {{ listaptmnt.drName }}
                </b-td> 
                <b-td  ><p>{{ listaptmnt.date }}</p>
                        <p>{{ listaptmnt.time }}</p>
                </b-td>
                  <b-td  > {{ listaptmnt.status }} </b-td>
                <b-td > 
                  <b-btn variant="info"  @click="onHandLeClickUpdate(listaptmnt)">
                    <span class="fa fa-edit"></span>
                  </b-btn>
                </b-td>
              </b-tr>
            </b-tbody>
      </b-table-simple>
        </div>
  </div>
</template>

<script>
export default {
   data(){
     return{
       hide:'',
       users:[],
       appointments:[],
       form: {
          UserUid:'',
          drName:'',
       },
     }
   },
    mounted(){
          this.getListAppointment() 
          this.getPosition()
      },

       methods: {
            getListAppointment(){
                  this.$http.get('http://localhost:3000/appointment')
                      .then(res => {
                          this.appointments = res.data
                           console.log(res.data)
                      })  
            },

            getPosition(){

                  this.$http.get('http://localhost:3000/users/position/dr')
                      .then(res => {
                          this.users = res.data
                      })
            },
              onHandLeUpdate(){
              var uid = this.form.UserUid
              var id = this.form.id
              this.$http.patch(`http://localhost:3000/appointment/${uid}/${id}`, this.form)
                                  .then(() => {
                                      this.form ={
                                        // UserUid:'',
                                        drName:''
                                      }
                                    this.getListAppointment()
                                  })  
            },

            onHandLeClickUpdate(listaptmnt){
            this.form = listaptmnt
            this.getListAppointment()
            },
      },
}
</script>