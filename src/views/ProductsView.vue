<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <input type="text" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success" @click="toggleSort">Sorting by price</button>
            </div>
        </div>
        <div class="row" v-if="products">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <img :src="product.prodImg" :alt="`${ product.prodName }`">
                    <p id="category" class="card-text text-white bg-gradient bg-success p-2">
                        Category: {{ product.prodCat }}
                    </p>
                    <p id="quantity" class="card-text text-white bg-gradient bg-success p-2">
                        Quantity: {{ product.prodQuantity }}
                    </p>
                    <p id="amount" class="card-text text-white bg-gradient bg-success p-2">
                        Amount: R{{ product.prodAmount }}
                    </p>
                   
                        <router-link class="text-white" :to="{name: 'product', params: {id: product.prodID}}"> <button id="viewMore" router-link class="text-white" :to="{name: 'product', params: {id: product.prodID}}">View More</button></router-link>
                    
                    
                </template>
            </Card>
        </div>
        <div class="row" v-else>
        <SpinnerComp></SpinnerComp>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import SpinnerComp from '@/components/SpinnerComp.vue'
export default {
    name: 'ProductsView',
    components: {
        Card,
        SpinnerComp
    },
    data() {
        return {
            sortAsc: true  // true for ascending, false for descending
        };
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    methods: {
        toggleSort() {
            this.sortAsc = !this.sortAsc;
            this.sortProducts();
        },
        sortProducts() {
            this.$store.commit('sortProducts', { ascending: this.sortAsc });
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')

    }
}
</script>

<style scoped>
.card-title{
    border-radius: 12px;
}
img{
    width: 200px;
}
#category{
    border-radius: 12px;
}
#quantity{
    border-radius: 12px;

}
#amount{
    border-radius: 12px;

}
#itemTitle{
    border-radius: 12px;

}
#viewMore {
    background-color: rgb(39, 142, 86);
    border-radius: 5px;
    width: 110px;
    height: 40px;
    transition: background-color 0.3s ease;
}

#viewMore:hover {
    background-color: rgb(35, 211, 105); /* darker shade when hovered */
}

</style>