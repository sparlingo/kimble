<template>
  <section class="things">
    <div class="row">
      <Card
        :title="page.title"
        :description="page.description"
      >
       <!-- //<nuxt-content :document="page" /> -->
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  },

  components: {
    Card
  }
}
</script>
