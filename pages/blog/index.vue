<template>

</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "post"][0].title`

export default {
  async fetch() {
    const result = await this.$sanity.fetch(query)
    this.title = result
  },
  data: () => ({ title: '' }),
}
</script>