<template>
  <Layout>
    <div class="container mx-auto">
      <h1 class="text-3xl">
        <Slider />
      </h1>
    </div>
  </Layout>
</template>

<script>
import Slider from "../components/ImageSlider.vue"
export default {
  components: {
    Slider
  }
}
</script>