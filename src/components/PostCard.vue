<template>
  <article>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <g-image src="~/assets/images/crayons.jpg" />
      <div class="px-6 py-4">
        <g-link 
          :to="`${post.path}/`"
          class="text-gray-800 font-bold">  
          <div class="font-bold text-sl mb-2">
            <h2 class="text-2xl">{{post.title}}</h2>
          </div>
        </g-link>
        <span v-if="post.author">by
          <g-link 
            :to="`${post.author.path}/`"
            class="text-green-700 capitalize border-b border-transparent hover:border-green-400 transition-border-color"
            v-if="post.author">{{ titleCase(post.author.title) }}
          </g-link>
        </span>
        <span class="text-gray-700">{{ post.timeToRead }} min read</span>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#something</span>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'
export default {
  props: ['post'],
  methods: {
    formatPublishDate(date) {
      return moment(date).format('DD MMMM, YYYY');
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  }
}
</script>