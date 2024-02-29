<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <input type="text" id="search" v-model="searchItem" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success" id="filter" @click="toggleFilter">{{ filterButtonText }}</button>
            </div>
            <div class="col">
                <button class="btn btn-success" id="sort" @click="toggleSort">Sorting by price</button>
            </div>
        </div>
        <div class="row" v-if="products">
            <Card v-for="product in filteredProducts" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <img id="productImage" :src="product.prodImg" :alt="`${ product.prodName }`">
                    <p id="category" class="card-text text-white bg-gradient bg-success p-2">
                        Category: {{ product.prodCat }}
                    </p>
                    <p id="quantity" class="card-text text-white bg-gradient bg-success p-2">
                        Quantity: {{ product.prodQuantity }}
                    </p>
                    <p id="amount" class="card-text text-white bg-gradient bg-success p-2">
                        Amount: R{{ product.prodAmount }}
                    </p>
                    <router-link class="text-white" :to="{name: 'product', params: {id: product.prodID}}">
                        <button id="viewMore" class="text-white">View More</button>
                    </router-link>
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
            sortAsc: true,
            searchItem: '',
            filterType: 'All'
        };
    },
    computed: {
        filteredProducts() {
            let filtered = this.products;
            if (this.searchItem) {
                filtered = filtered.filter(product => {
                    return product.prodName.toLowerCase().includes(this.searchItem.toLowerCase());
                });
            }
            if (this.filterType !== 'All') {
                filtered = filtered.filter(product => {
                    return product.prodCat.toLowerCase() === this.filterType.toLowerCase();
                });
            }
            return filtered;
        },
        products() {
            return this.$store.state.products;
        },
        filterButtonText() {
            if (this.filterType === 'All') {
                return 'All';
            } else if (this.filterType === 'tshirt') {
                return 't-shirt';
            } else {
                return 'vest';
            }
        }
    },
    methods: {
        toggleSort() {
            this.sortAsc = !this.sortAsc;
            this.sortProducts();
        },
        toggleFilter() {
            if (this.filterType === 'All') {
                this.filterType = 'tshirt';
            } else if (this.filterType === 'tshirt') {
                this.filterType = 'vest';
            } else {
                this.filterType = 'All';
            }
        },
        sortProducts() {
            this.$store.commit('sortProducts', { ascending: this.sortAsc });
        },
        mounted() {
            this.$store.dispatch('fetchProducts');
        }
    }
}
</script>
<style scoped>
#search{
    margin-top:100px;
    margin-bottom:100px;
    width:190px;
}
#filter{
    margin-top:100px;
    margin-bottom:100px;
    width:190px;
}
#sort{
    margin-top:100px;
    margin-bottom:100px;
    width:190px;
}
#productImage{
    height:200px;
    width:200px
}
.card-title {
    border-radius: 12px;
}
img {
    width: 200px;
}
#category {
    border-radius: 12px;
}
#quantity {
    border-radius: 12px;
}
#amount {
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
    background-color: rgb(35, 211, 105);
}
</style>