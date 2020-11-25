<template>
  <div id="allPosts">
    <div class="card" style="width: 20rem;" v-for="post in posts" :key="_id">
      <img src="https://picsum.photos/384" alt="Card example image">
      <div class="card-body">
        <h4 class="card-title">{{post.title}}</h4>
        <h5 class="card-subtitle">Nice looking subtitle.</h5>
        <p class="card-text">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  asyncData({ $sanity }) {
    const query = '{ "posts": *[_type == "post"] }'
    return $sanity.fetch(query)
  }
}

</script>