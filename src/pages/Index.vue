<template>
  <Layout title="Charlotte's English Garden">
    <br />
    <br />
    <div class="container">
      <h1 class="title">Kimble</h1>
      <h2 class="subtitle">A demo of a web-based class managment system</h2>
    </div>
    <hr />
    <br />
    <div class="container">
    
    </div>
    <div class="container">
      <h3 class="title">Contact Me</h3>
      <section>
        <form action="https://formspree.io/davidli012345@gmail.com" method="POST">
          <b-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
            <b-input name="subject" expanded></b-input>
          </b-field>

          <b-field horizontal label="From">
            <b-input name="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
          </b-field>

          <b-field horizontal label="Topic">
            <b-select placeholder="Select a topic">
              <option value="1">Bulma</option>
              <option value="2">Vue.js</option>
              <option value="3">Buefy</option>
            </b-select>
          </b-field>

          <b-field horizontal label="Message">
            <b-input type="textarea" name="text"></b-input>
          </b-field>

          <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
              <button class="button is-primary">
                Send message
              </button>
            </p>
          </b-field>
        </form>
      </section>
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