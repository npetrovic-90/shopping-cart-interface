<template>
  <div id="app" class="container mt-5">
    <h1>My Shop</h1>
    <navbar
    v-bind:cart="cart"
    v-bind:cartQty="cartQty"
    v-bind:cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="removeItem"></navbar>
    <price-slider :sliderStatus="sliderStatus" v-model:model="maximum"></price-slider>
    <product-list :maximum="maximum" :products="products" @add="addItem"> </product-list>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ProductList from './components/ProductList.vue'
import PriceSlider from './components/PriceSlider.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  data: function () {
    return {
      maximum: 99,
      sliderStatus: false,
      cart: [],
      products: null
    }
  },
  computed: {
    cartTotal: function () {
      let sum = 0
      for (var key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty
      }

      return sum
    },
    cartQty: function () {
      let qty = 0
      for (var key in this.cart) {
        qty = qty + this.cart[key].qty
      }

      return qty
    }
  },
  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus
    },
    removeItem: function (id) {
      if (this.cart[id].Qty > 1) {
        this.cart[id].Qty--
      } else {
        this.cart.splice(id, 1)
      }
    },
    addItem: function (product) {
      var whichProduct
      var existing = this.cart.filter(function (item, index) {
        if (item.product.id === Number(product.id)) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })

      if (existing.length) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    }
  },
  components: {
    // FontAwesomeIcon,
    ProductList,
    PriceSlider,
    Navbar
  },
  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
      .then((response) => response.json())
      .then((data) => {
        this.products = data
      })
  }
}
</script>
