<template>
  <div id="allBlogs">

    <Card
      title="A Thing"
      subtitle="Blah blah stuff stuff"
    />

  </div>
</template>

<script>
import Card from '~/components/Card'
export default {
  Card,
  async asyncData({ $content }) {
    const blogs = await $content()
      .only(['articles'])
      .sortBy('name', 'asc')
      .fetch()

    console.log(blogs)
    return {
      blogs
    }
  }
}

</script>
