<template>
    <!-- Button trigger modal -->
  <button type="button " class="btn modalButton" data-bs-toggle="modal" data-bs-target="#addproductModal">
  Create Product
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="addproductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="addProduct">
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Prod ID" v-model="payload.prodID">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Product Name" v-model="payload.prodName">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Product Image" v-model="payload.prodImg">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Product Category" v-model="payload.prodCat">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Quantity" v-model="payload.prodQuantity">
          </div>
          <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="Amount" v-model="payload.prodAmount">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-success">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  
  </template>
  
  <script>
    export default {
        name: 'AddProduct',
        data(){
          return{
            payload: {
              prodID: '',
              prodName:'',
              prodImg: '',
              prodCat: '',
              prodQuantity:'',
              prodAmount:''
            }
          }
        },
        computed: {
          message(){
            return this.store.state.message
          }
        },
        methods: {
          addProduct(){
            this.$store.dispatch('addProduct', this.payload)
            window.location.reload()
          }
        }
    }
  </script>
  
  <style scoped>
  .modalButton {
    display: flex;
    margin: auto; 
    margin-bottom: 10px;
    background-color: #07ff07;
    color: black;
  }
  </style>