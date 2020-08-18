<template>
  <div class="text-center">
    <p>{{ count }}</p>
    <button class="btn btn-primary" @click="increase()">UP</button>
    <button class="btn btn-info" @click="decrease()">DOWN</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.initial
    }
  },
  props: {
    initial: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count--
    }
  }
}
</script>

<style>

</style>