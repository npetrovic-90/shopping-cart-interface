<template>
    <transition name="fade">
    <div v-if="sliderStatus">
      <div class="justify-content-center" :class="sliderState">

        <label class="font-weight-bold me-2" for="formMax">max</label>
        <input type="text" class="form-control mx-2" style="width:100px;"
        v-model="maxAmount" @change="$emit('update:maximum',maxAmount)"  id="formMax">
        <input type="range" class="custom-range" min="0" max="200"
        v-model="maxAmount" @change="$emit('update:maximum',maxAmount)">
      </div>
    </div>
</transition>
</template>

<script>
export default {
  name: 'price-slider',
  data: function () {
    return {
      maxAmount: 99
    }
  },
  props: ['sliderStatus'],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? 'd-flex' : 'd-none'
    }
  }
}
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
