<template>
  <div id="allGroups">

    <Card
      title="CKC: Rainbows"
      subtitle="My homeroom class at CKC"
    />

  </div>
</template>

<script>
import Card from '~/components/Card'
export default {
  Card,
  // async asyncData({ $content }) {
  //   const groups = $content('classes')
  //     .only(['name', 'slug'])
  //     .sortBy('name')
  //   return { groups }
  // }
}

</script>
