<template>
    <div class="container">
      <div>
        <h2 id="userHeading" class="display-4 mt-4 mb-4">USER</h2>
      </div>
      <AddUser :user="user" />
  
      <div class="container">
          <div class="table-responsive">
            <table class="table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>User age</th>
              <th>Gender</th>
              <th>Email address</th>
              <th>User role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td class="d-flex gap-2">
                <updateUser :user="user" />
                <button
                  id="deleteUse"
                  class="btn btn-success deleteButton"
                  @click="(event) => deleteUser(user.userID)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
  
      <div class="mt-4">
        <div class="row">
          <h2 id="productHeading" class="display-4 mb-4">PRODUCTS</h2>
        </div>
        <AddProduct />
  
        <div class="container">
          <div class="table-responsive">
            <table class="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Quantity</th>
                <th>Product Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="products">
              <tr v-for="product in products" :key="product.prodID">
                <td>
                  {{ product.prodID }}
                </td>
                <td>
                  <img
                    class="img-fluid"
                    id="prodImg"
                    :src="product.prodImg"
                    alt=""
                  />
                </td>
                <td>
                  {{ product.prodName }}
                </td>
                <td>
                  {{ product.prodCat }}
                </td>
                <td>
                  {{ product.prodQuantity }}
                </td>
                <td>R {{ product.prodAmount }}</td>
                <td class="d-flex gap-2">
                  <updateProduct :product="product" />
                  <button
                    id="deleteBut"
                    class="btn btn-success deleteButton"
                    @click="(event) => deleteProduct(product.prodID)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AddUser from "../components/AddUser.vue";
  import AddProduct from "../components/AddProduct.vue";
  import updateUser from "../components/UpdateUserModal.vue";
  import updateProduct from "../components/UpdateProduct.vue";
  export default {
    components: {
      AddUser,
      AddProduct,
      updateUser,
      updateProduct,
    },
    computed: {
      users() {
        return this.$store.state.users;
      },
      products() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
      this.$store.dispatch("fetchProducts");
      // this.$store.dispatch('deleteUser')
    },
    methods: {
      deleteUser(userID) {
        this.$store.dispatch("deleteUser", { id: userID });
      },
      deleteProduct(prodID) {
        this.$store.dispatch("deleteProduct", { id: prodID });
      },
      updateUser(user) {
        let editUser = {
          userID: user.userID,
          firstName: user.firstName,
          lastName: user.lastName,
          userRole: user.userRole,
          gender: user.gender,
          userAge: user.userAge,
        };
        this.$store.dispatch("updateUser", { id: user.userID, data: editUser });
      },
      updateProduct(product) {
        let editProduct = {
          prodID: product.prodID,
          prodName: product.prodName,
          prodImg: product.prodImg,
          prodCat: product.prodCat,
          prodQuantity: product.prodQuantity,
          prodAmount: product.prodAmount,
        };
        this.$store.dispatch("updateUser", {
          id: product.userID,
          data: editProduct,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* #userHeading {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  
  #productHeading {
    margin-top: 100px;
    margin-bottom: 100px;
  } */
  #deleteBut {
    height: 50px;
    /* margin-bottom: 10px;
    margin-top: 100px; */
    background-color: rgb(39, 142, 86);
    color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
    font-size: 16px;
    font-weight: bold;
    padding: 0 20px;
    cursor: pointer;
  }
  #deleteBut:hover {
    background-color: rgb(35, 211, 105);
    color: white;
    transform: translateY(-2px);
  }
  
  #deleteUse {
    height: 50px;
    /* margin-bottom: 10px;
    margin-top: 100px; */
    background-color: rgb(39, 142, 86);
    color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
    font-size: 16px;
    font-weight: bold;
    padding: 0 20px;
    cursor: pointer;
  }
  
  #deleteUse:hover {
    background-color: rgb(35, 211, 105);
    color: white;
    transform: translateY(-2px);
  }
  
  #prodImg {
    width: 160px;
    /* height:160px  */
    aspect-ratio: 1/1;
  }

  table{
    border: solid  rgb(39, 142, 86);
  }
  </style>