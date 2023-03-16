<template>
  <div id="app">
  <nav class="top-barcss" >
    <figure class="image">
      <img src="./assets/logo.jpg" alt="Image"  />
    </figure>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/repos">Repos</router-link>
  </nav>

  <router-view />
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>AltSchool Africa</strong>

        Third Semester
      </p>
    </div>
  </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fefefe;
}

main {
  background-color: black;
}

.top-barcss {
  margin: -1rem -1rem 0 -1rem;
  padding: 20px;
  background-color:#f6f4f9;
}

.image {
  position: relative;
}

.image img {
   position: absolute;
    top: -10px;
    left: -40px;

  width: 70px;
}
nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: whitesmoke;
  background-color: blueviolet;
}

.footer {
  padding-top: 10%;
}

</style>