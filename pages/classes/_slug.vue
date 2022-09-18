<template>
  <article>
    <h2>Group Name</h2>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const group = await $content('classes', params.slug).only(['students']).fetch()
      console.log
      return { group }
    }
  }
</script>
