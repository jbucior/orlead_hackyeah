<template>
  <div id="app">
    <app-header/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  name: 'App',
  components: { AppHeader, AppFooter },
};
</script>

<style src="./assets/styles/index.scss" lang="scss"></style>
