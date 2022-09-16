<template>
  <div>
    <Navbar />
    <div class="paper container-lg">
      <transition name="fade" appear>
        <main>
          <Nuxt />
        </main>
      </transition>
    </div>
    <div class="paper container-md">
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Kimble</strong> by <a href="https://sparlingo.github.io">Kevin Sparling</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
  .container-lg {
    margin-top: 2.5em;
  }
</style>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Classes',
          icon: 'lightbulb',
          to: { name: 'classes' }
        }
      ]
    }
  }
}
</script>
