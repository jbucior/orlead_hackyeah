<template>
  <main class="page">
    <div class="container-fluid">
      <google-map name="example"/>
    </div>
  </main>
</template>

<script>
import GoogleMap from '@/components/GoogleMap';

export default {
  components: { GoogleMap },
  data() {
    return {

    };
  },
};
</script>
