<template>
  <div class="map">
    <div class="container-fluid">
      <google-map name="example"/>
    </div>
  </div>
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
