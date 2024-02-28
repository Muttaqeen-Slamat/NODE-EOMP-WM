<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row">
            <Card v-if="product">
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
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
    export default {
        components:{
            Card,
        },
        computed: {
            product() {
                return this.$store.state.product
            }
        },
        mounted() {
            this.$store.dispatch('fetchProduct', this.$route.params)
        }
    }
</script>

<style scoped>
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
</style>