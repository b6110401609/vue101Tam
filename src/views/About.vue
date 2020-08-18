<template>
  <div>
    <h1>About Me</h1>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        ({{ index }}) {{ item.name }} >> {{ item.quantity }}
      </li>
    </ul>

    <div>
      {{ date | moment("from", "now") }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "2 August 2020",
      items: [
        {
          name: 'ABC',
          quantity: 10
        },
        {
          name: 'DEF',
          quantity: 36
        }
      ]
    }
  }
}
</script>

<style>

</style>