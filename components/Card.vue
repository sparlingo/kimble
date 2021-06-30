<template>
  <div class="card" style="width: 15rem;">
    <img src="https://picsum.photos/768" alt="Card example image">

    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'description'
  ]
}
</script>