<template>
  <main class="page">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </main>
</template>

<script>

export default {
  data() {
    return {
    };
  },
};
</script>
