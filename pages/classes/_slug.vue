<template>
  <div>
    <!-- <pre>{{info}}</pre> -->
    <h1>{{info.slug}}</h1>
    <p>{{info.body}}</p>
  </div>
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
