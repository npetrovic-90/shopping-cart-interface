<template>
    <div>
    <h1>My Shop</h1>
    <navbar
    v-bind:cart="cart"
    v-bind:cartQty="cartQty"
    v-bind:cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="removeItem"></navbar>
    <price-slider :sliderStatus="sliderStatus" v-model:maximum="maximums" ></price-slider>
    <product-list v-model="maximums" :products="products" @add="addItem" > </product-list>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import PriceSlider from './PriceSlider.vue'
import ProductList from './ProductList.vue'

export default {
  name: 'products',
  data: function () {
    return {
      maximums: this.maximum
    }
  },
  props: ['products', 'maximum', 'cart', 'cartQty', 'cartTotal', 'sliderStatus', 'sliderState'],
  components: {
    Navbar, PriceSlider, ProductList
  }
}
</script>
