<template>
  <div>
      <h2>Im in _id.vue</h2>
      {{$route.params.id}}
      <nuxt-child :user="$store.state.currentUser"></nuxt-child>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head:{
    title:`/users/_id`,
  },
  computed:{
    ...mapGetters(['getUserById']),
  },
  async fetch({params,store}) {
    let user = store.getters.getUserById(params.id)
    store.commit("SET_CURRENT_USER",user)
  }

};
</script>

<style></style>
