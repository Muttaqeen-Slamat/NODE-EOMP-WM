<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProductModal">
      Update Product
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Details</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Prod ID" v-model="payload.prodID">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Prod Name" v-model="payload.prodName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Prod Image" v-model="payload.prodImg">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Prod Category" v-model="payload.prodCat">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Quantity" v-model="payload.prodQuantity">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Amount" v-model="payload.prodAmount">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateProduct',
    data() {
      return {
        payload: {
          prodID: '',
          prodName: '',
          prodImg: '',
          prodCat: '',
          prodQuantity: '',
          prodAmount: ''
        }
      }
    },
    methods: {
      updateProduct() {
        this.$store.dispatch('updateProduct', { id: this.payload.prodID, data: this.payload });
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
  