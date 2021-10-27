<template>
  <article>
    Im in pages/blog.vue
    <!-- <nuxt-content :document="post" /> -->
    <div :document="post">
      <display-list :q1="post.quiz.maths.q1" />
    </div>
  </article>
</template>

<script>
import displayList from "../../components/displayList.vue"
export default {
    layout: "blogs",
    // components:{
    //   "display-list":displayList
    // },
    async asyncData({$content, params}){
      const post =  await $content('articles',params.slug).fetch();
      // const post =  await $content('two').fetch();
      console.log("post",post);
      return {
        post
      }
    }
}
</script>

<style>
article{
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
}
h1{
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 30px;
}
</style>