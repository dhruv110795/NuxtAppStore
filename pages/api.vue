<template>
  <div>
    {{data}}
  </div>
</template>

<script>
export default {
  middleware: 'test-auth',
  layout:'blogs',
  async asyncData({app}){
    const data = await app.$api("https://api.nuxtjs.dev/posts/1")
    console.log("/api response >>>>",data)
    return {data}
  }
}
</script>

<style>

</style>