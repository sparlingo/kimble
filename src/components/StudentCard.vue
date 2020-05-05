<template>
  <article>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <g-image src="~/assets/images/default.png" />
      <div class="font-bold text-sl mb-2">
        <h2 class="text-2xl">{{student.name}}</h2>
      </div>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: ['student'],
  methods: {
    formatJoinDate(date) {
      return moment(date).format('DD MMMM, YYYY')
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  }
}
</script>