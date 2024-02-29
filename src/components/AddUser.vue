<template>
    <!-- Button trigger modal -->
  <button type="button " class="btn modalButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create User
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">User Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="register">
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="User ID" v-model="payload.userID">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="First Name" v-model="payload.firstName">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Last Name" v-model="payload.lastName">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Age" v-model="payload.userAge">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Gender" v-model="payload.gender">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Role" v-model="payload.userRole">
            </div>
          <div class="mb-3">
              <input type="email" class="form-control w-50 mx-auto" placeholder="Email" v-model="payload.emailAdd">
          </div>
          <div class="mb-3">
              <input type="password" class="form-control w-50 mx-auto" placeholder="Password" v-model="payload.userPwd">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success" >Add User</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  
  </template>
  
  <script>
  // import sweet from 'sweetalert'
    export default {
        name: 'AddUser',
        data(){
          return{
            payload: {
              userID: '',
              firstName:'',
              lastName:'',
              userRole:'',
              gender:'',
              userAge: '',
              emailAdd:'',
              userPwd:'',
              // userProfile:'https://i.postimg.cc/pTLmhdpj/placeholder-person.jpg'
            }
          }
        },
        computed: {
          message(){
            return this.store.state.message
          }
        },
        methods: {
  async register() {
    try {
      await this.$store.dispatch('register', this.payload);
      // Optionally, show a success message here
    } catch (error) {
      // Handle any errors or show error messages
      console.error(error);
    }
    window.location.reload();
  }
  
}
    }
  </script>
  
  <style scoped>
  .modalButton {
    position: relative;
    height: 52px;
  margin-bottom: 10px;
  margin-top: 60px;
  background-color:rgb(39,142,86);
  color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  }

  .modalButton:hover {
    background-color: rgb(35, 211, 105);
  color: white;
  transform: translateY(-2px);
}
  </style>