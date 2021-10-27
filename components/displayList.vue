<template>
  <main>
    <!-- {{q1.options}} -->
    <div v-for="(option,i) in q1.options" :key="i">
      <h2>{{option}}</h2>
    </div>
  </main>
</template>

<script>
export default {
  name:"displayList",
  props:{
    q1:{
      options:{
        type: Array,
        required: true
      }
    }
  }
}
</script>

<style>

</style>