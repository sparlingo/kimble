<template>
  <div id="allGroups">
    <div class="card" style="width: 20rem;" v-for="group in groups" :key="_id">
      <img src="https://picsum.photos/384" alt="Card example image">
      <div class="card-body">
        <h4 class="card-title">{{group.title}}</h4>
        <h5 class="card-subtitle">Nice looking subtitle.</h5>
        <p class="card-text">{{group.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`{ "groups": *[_type == "group"] }`

export default {
  asyncData({ $sanity }) {
    return $sanity.fetch(query)
  }
}

</script>