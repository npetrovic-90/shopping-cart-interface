<template>
  <div id="app" class="container mt-5">
    <router-view
    v-bind:cartTotal="cartTotal"
    v-bind:cart="cart"
    v-bind:cartQty="cartQty"
    @add="addItem"
    @delete="removeItem"
    v-bind:sliderStatus="sliderStatus"
    v-bind:products="products"
    v-model:maximum="maximum"
    @toggle="toggleSliderStatus">
    </router-view>
  </div>
</template>

<script>

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import Products from './components/Products.vue'
// import Checkout from './components/Checkout.vue'

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
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--
      } else {
        this.cart.splice(id, 1)
      }
    },
    addItem: function (product) {
      var whichProduct
      var existing = this.cart.filter(function (item, index) {
        if (item.product.id === product.id) {
          whichProduct = index
          console.log('it is true that numbers are equal')
          return true
        } else {
          console.log('it is false that numbers are equal')
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

  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then((data) => {
        this.products = data
      })
  }
}
</script>
