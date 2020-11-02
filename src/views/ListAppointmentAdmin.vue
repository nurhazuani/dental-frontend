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
                                v-model="form.status"
                                type="text"
                                class="form-control"
                                placeholder="Staff ID"
                                hidden
                                /> 
                                <input
                                 v-model="form.id"
                                type="text"
                                class="form-control"
                                placeholder="..."
                               hidden
                                />

                            <b-col cols="12">
                <b-card align="left" bg-variant="grey" text-variant="black" header="List of Doctor Name">
                <form  > 
                  <b-row align-content="center">
                  <b-col><input
                                v-model="form.uid"
                                type="text"
                                class="form-control"
                                placeholder="Staff ID"
                                @keydown.space.prevent
                                /> </b-col>
                    
                                 <b-col><input
                                v-model="form.uname"
                                type="text"
                                class="form-control"
                                placeholder="Name"
                                /> </b-col>
                                 <b-col><input
                                v-model="form.position"
                                type="text"
                                class="form-control"
                                placeholder="Position"
                                /> </b-col>
                               

                
                  <b-col>
                          <b-button variant="primary" type="submit"  @click="onHandLeAdd()" >Add</b-button>
                  </b-col>
                    </b-row>
                      <br>
                  </form>
                </b-card>
              </b-col>
            <!-- </b-row> -->
                          <!-- <input
                                v-model="form.role"
                                type="text"
                                class="form-control"
                                placeholder="..."
                                hidden
                                /> -->
                                
            <br>
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
    <b-tbody   v-for="(listaptmnt) in appointments" :key="listaptmnt.id"> 
      <b-tr>
        <b-td  colspan="2"
      
        >{{ listaptmnt.uname }}</b-td>
         <b-td  colspan="3">{{ listaptmnt.email }} </b-td>
        <b-td  colspan="2">{{listaptmnt.service }}</b-td>
        <b-td  colspan="2">
        </b-td> 
        <b-td  ><p>{{ listaptmnt.date }}</p>
                <p>{{ listaptmnt.time }}</p>
        </b-td>
           <b-td  > {{ listaptmnt.status }} </b-td>
        <b-td > 
          <b-btn variant="danger"  @click="onHandLeClickDelete(listaptmnt.uid)">
            <span class="fa fa-edit"></span>
          </b-btn>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
 
  </div>
</template>

<script>
export default {
   data(){
     return{
       users:[],
       appointments:[],
       form: {
          UserUid:'',
          drName:'',
          status:'',
       },
     }
   },
    mounted(){
          this.getListAppointment() 
          // this.getUser()
      },

       methods: {
            getListAppointment(){
                // var uid = this.form.UserUid

                  this.$http.get('http://localhost:3000/appointment')
                      .then(res => {
                          this.appointments = res.data
                           console.log(res.data)
                      })  
            },

            getUser(){
                  this.$http.get('http://localhost:3000/users')
                      .then(res => {
                          this.users = res.data
                      })
            },
              onHandLeAdd(){
              this.$http.post('http://localhost:3000/users', this.form)
                                  .then(() => {
                                      this.form ={
                                      uid:'',
                                      uname: '',
                                      password:'',
                                      position:'',
                                      role: ''
                                      }
                                   this.getStaff() 
                                  })  
            },

            onHandLeClickDelete(uid){ 
              this.$http.delete(`http://localhost:3000/users/${uid}`) 
                              .then(() => {
                                this.form ={
                                      uid:'',
                                      uname: '',
                                      password:'123abc',
                                      position:'',
                                      role: 'Staff'
                                      }
                                      this.getStaff() 
                                  })               
            },
      },
}
</script>