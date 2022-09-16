<template>
  <article>
    <img :src="require(`~/assets/images/${article.img}`)" 
      :alt="article.alt" 
      class="float-left"
    />
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>Article last updated: {{ formatDate(article.updatedAt )}}</p>

    <nuxt-content :document="article" />
    
  </article>
</template>

<script>
  export default {
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
  

</script>