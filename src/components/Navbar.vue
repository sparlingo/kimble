<template>
<nav class="border fixed split-nav" role="navigation" aria-label="main navigation">
  <div class="nav-brand">
    <h3><a href="#">Kimble</a></h3>
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
        <li><g-link to="/">Home</g-link></li>
        <li><g-link to="/classes">Classes</g-link></li>
        <li><g-link to="/blog">Blog</g-link></li>
      </ul>
    </div>
  </div>  
</nav>
</template>