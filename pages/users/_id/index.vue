<template>
  <!-- <div>
    <div>We are in {{ user.firstName }}</div>
    <nuxt-link :to="`/users/${user.id}/edit`">
      <button>Edit</button>
    </nuxt-link>
  </div> -->
  <v-container>
    <v-card>
      <v-img 
        height="250"
        :src="user.avatar"
        ></v-img>
      <v-card-title> {{ user.first_name + " " + user.last_name }}</v-card-title>
      <v-card-text>
        <div>{{ user.email }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          color="green lighten-2" 
          class="mr-2"
          :to='`/users/${user.id}/edit`'
        >Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>


</template>

<script>
export default {
  props: ['user']
}
</script>

<style></style>
