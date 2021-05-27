<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper lime lighten-5">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">dehaze</i></a>

        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">HOME</router-link></li>
          <li> | </li>
          <li><router-link to="/courts">HOME</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
    color: black;
}

nav a{
    color: #6b51c0;
}

nav ul li a{
    color: #795dd6;
    font-family: novecento-sans-wide, sans-serif;
    font-weight: 300;
    font-style: normal;
 }

</style>
