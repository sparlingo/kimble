<template>

</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "post"][0].title`

export default {
  mounted() {
    this.observable = this.$sanity.client.listen(query)
  },
  data: () => ({ observable: null})
}
</script>