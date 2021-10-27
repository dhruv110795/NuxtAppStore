<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="d-flex flex-wrap justify-center">
      <div v-for="user in users" :key="user.id">
        <UserList :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserList from "../components/userList.vue";

export default {
  components: {
    UserList
  },
  computed: {
    ...mapState(["users"])
  },
  async fetch({ store, from }) {
    let isInitialPageLoaded = !from;
    if (isInitialPageLoaded) {
      await store.dispatch("loadAllUsers");
    }
  }
};
</script>

<style></style>
