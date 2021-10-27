<template>
  <div>
    <h1>Editing {{ $route.params.id }}</h1>
    <nuxt-link :to="`/users/${user.id}`">
      <button>Back</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: ["user"]
}
</script>

<style>

</style>