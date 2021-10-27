<template>
  <v-card width="340px" 
          hover 
          class="ma-2"
          >
    <v-img 
        :src="user.avatar" 
        :lazy-src="user.avatar" 
        height="250"
        />
    <v-card-title>{{ user.first_name + " " + user.last_name }}</v-card-title>
    <v-card-text> {{user.email}} </v-card-text>

    <v-card-actions>
        <v-btn color="green lighten-2" 
                class="mr-2"
                :to='`/users/${user.id}`'
                >
            View Full Data
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
  },
  props: ['user'],  
}
</script>

<style scoped lang="scss">
</style>