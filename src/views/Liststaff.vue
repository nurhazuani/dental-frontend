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
                                        <li class="breadcrumb-item active" aria-current="page">List of Staff</li>
                                    </ol>
                                </nav>
                            </div>
            <!-- </b-row> -->
 <input
                                v-model="form.role"
                                type="text"
                                class="form-control"
                                placeholder="..."
                              
                                disabled
                                />
                                   <!-- <b-btn variant="info"   @click="onHandLeClickUpdate(user)" > 
            <span class="fa fa-eye" ></span>
          </b-btn> -->
            <br>
     <b-table-simple hover small caption-top responsive>
     
  
    <b-thead head-variant="dark">
      <b-tr>
        <b-th colspan="2">Staff ID</b-th>
        <b-th colspan="3">Name</b-th>
        <b-th colspan="2">Position</b-th>
        <b-th >Detail</b-th>
        <b-th >Action</b-th>
      </b-tr>
    </b-thead>
    <b-tbody   v-for="(user) in users" :key = "user.uid"> 
      <b-tr>
        <b-td  colspan="2">{{ user.uid }}</b-td>
        <b-td  colspan="3">{{ user.uname }} </b-td>
        <b-td  colspan="2">{{ user.position }}</b-td>
        <b-td  > 
          <b-btn variant="info"   @click="onHandLeClickUpdate(user)" > 
            <span class="fa fa-eye" ></span>
          </b-btn>
        </b-td>
        <b-td > 
          <b-btn variant="danger"  @click="onHandLeClickDelete(user.uid)">
            <span class="fa fa-trash"></span>
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
       form: {
          uid:'',
          uname: '',
          position:'',
          role: 'Staff'
       },
     }
   },
    mounted(){
          this.getStaff() //call back method todos
      },

       methods: {
            getStaff(){

                var role = this.form.role

                  this.$http.get(`http://localhost:3000/users/role/${role}`)
                      .then(res => {
                          this.users = res.data
                           console.log(res.data)  
                      })  
                      
            },

            onHandLeClickDelete(uid){
              this.$http.delete(`http://localhost:3000/users/${uid}`) 
                              .then(() => {
                                this.form ={
                                        uid:'',
                                        uname: '',
                                        position:'',
                                }
                                    this.getUser()
                                  })               
            },
      },
}
</script>