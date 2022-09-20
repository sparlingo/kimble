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
  async asyncData({ $content, params }) {
    const groups = await $content({deep: true})
      .only(['classes'])
      .sortBy('name', 'asc')
      .fetch()
    console.log(groups)
    return groups
  }
}

</script>
