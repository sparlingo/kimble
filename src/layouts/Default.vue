<template>
  <div>
    <Navbar />
    <div class="paper container">
      <transition name="fade" appear>
        <main> <!-- a wrapper for slot is needed -->
          <slot /> <!-- the content -->
        </main>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0;
}
</style>