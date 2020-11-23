<template>
  <section class="things">
    <div class="row">
      <Card
        title="Free"
        icon="github"
      >
        Repostitory at <a href="https://github.com/sparlingo/ceg">
          GitHub
        </a>
      </Card>

      
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }
}
</script>
