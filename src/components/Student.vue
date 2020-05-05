<template>
  <div v-if="student" class="flex flex-wrap items-center justify-center sm:justify-left border-blue-300 w-full mt-10 py-5 sm:px-16">

</template>

<style scoped>

</style>

<script>
export default {
  name: "Student",
  props: ['student'],
  computed: {
    avatar() {
      return `/students/images/${this.student.name}.jpg`
    }
  },
  methods: {
    titleCase(str) {
      return str.replace('-', ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    },
    imageLoadError(e) {
      e.target.src = `/students/images/default.jpg`
    }
  }
}
</script>