<template>
    <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ms-auto d-flex">
      <button class="btn btn-sm btn-outline-success" @click="$parent.$emit('toggle')">
      <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ms-2" v-if="cart.length>0">
        <button class="btn btn-success btn-sm dropdown-toggle" id="cartDropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">

          <span class="badge rounded-pill bg-light text-dark">{{cartQty}}</span>
          <i class="fas fa-shopping-cart mx-2"></i>
          <price :value="Number(cartTotal)"></price>
        </button>

        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cartDropdown">
          <div v-for="(item,index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-end">
              <span class="badge bg-warning text-dark ms-1">{{item.qty}}</span>
              {{item.product.name}}
              <b>{{item.qty*item.product.price }}$</b>
              <a href="#" v-on:click.stop="$parent.$emit('delete',index)" class="badge bg-danger text-light">-</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from './Price.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'navbar',
  props: ['cart', 'cartQty', 'cartTotal'],
  components: {
    FontAwesomeIcon,
    Price
  }
}
</script>
