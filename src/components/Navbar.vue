<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">


    <a class="navbar-brand navbar__brand" href="#">
      <img class="navbar__logo" src="~assets/img/orlen.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-item nav-link" :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item nav-link" :to="{ name: 'add-vehicle' }">Add a vehicle</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item nav-link" :to="{ name: 'map' }">Map</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item nav-link" :to="{ name: 'road' }">Check a route</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-item nav-link" :to="{ name: 'statistics' }">Statistics</router-link>
        </li>
      </ul>
    </div>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
