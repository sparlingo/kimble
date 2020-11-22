<template>
  <Layout title="Charlotte's English Garden">
    <br />
    <br />
    <div class="container">
      <h2>Kimble</h2>
      <h3>A web-based class managment system</h3>
    </div>
    <hr />
    <div class="container">
    
    </div>
    <div class="container">
      <h3 class="title">Contact Me</h3>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Kimble</strong> by <a href="https://sparlingo.github.io">Kevin Sparling</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </Layout>
</template>


<script>
import Layout from '~/layouts/Default.vue'

export default {
  data() {
    return {
      activeStep: 0,
    }
  },
  components: {
    Layout
  }
}
</script>