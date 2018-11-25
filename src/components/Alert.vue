<template>
  <div>
    <b-alert variant="success" :show="alert.success !== ''">
      <slot>
        <p>{{ alert.success }}</p>
      </slot>
    </b-alert>
    <b-alert variant="danger" :show="alert.error !== ''">
      <slot>
        <p>{{ alert.error }}</p>
      </slot>
    </b-alert>
    <b-alert variant="danger" :show="errors && Object.keys(errors).length > 0">
      <slot>
        <p v-for="(error, key) in errors" v-bind:key="key">{{ key }} {{ error }}</p>
      </slot>
    </b-alert>
  </div>
</template>

<script>
export default {
  props: ['alert', 'errors'],
};
</script>
