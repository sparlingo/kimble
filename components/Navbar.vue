<template>
  <nav class="border fixed split-nav" role="navigation" aria-label="main navigation">
    <div class="nav-brand">
      <h3><NuxtLink to="/">Kimble</NuxtLink></h3>
    </div>
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible1">
      <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/classes">Classes</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </div>
    </div>  
  </nav>
</template>

<style scoped>

</style>