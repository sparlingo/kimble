<template>
  <div class="card" style="width: 13rem;">
    <img src="https://picsum.photos/512" alt="Card example image">
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <h5 class="card-subtitle">{{ subtitle }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'subtitle',
    'description'
  ]
}
</script>