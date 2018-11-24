<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'add-vehicle' }">Dodaj pojazd</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'map' }">Mapa</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'road' }">Sprawdź dojazd</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'statistics' }">Statystyki</router-link>
        </li>
      </ul>
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
