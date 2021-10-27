<template>
  <div>
    <h1>Users</h1>
    <div v-for='user in $store.state.users' :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{user.first_name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style></style>
