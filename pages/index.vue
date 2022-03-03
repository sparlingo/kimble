<template>
  <section class="things">
    <div class="row">
      <!-- <Card
        :title="mcd.title"
        :subtitle="mcd.subtitle"
        :description="mcd.description"
      />
      <Card
        :title="kfc.title"
        :subtitle="kfc.subtitle"
        :description="kfc.description"
      />
      <Card
        :title="pizza.title"
        :subtitle="pizza.subtitle"
        :description="pizza.description"
      /> -->
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  // async asyncData ({ $content }) {
  //   const mcd = await $content('mcdonalds').fetch()
  //   const kfc = await $content('kfc').fetch()
  //   const pizza = await $content('pizzahut').fetch()

  //   return {
  //     mcd,
  //     kfc,
  //     pizza
  //   }
  // },

  components: {
    Card
  }
}
</script>
