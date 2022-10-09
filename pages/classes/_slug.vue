<template>
  <article>
    <!-- <pre>{{info}}</pre> -->
    <p>{{ info.title }}</p>
    <nuxt-content :document="info" tag="article" />

  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const info = await $content('classes', params.slug).fetch()
      console.log(info)
      return { info }
    }
  }

</script>
