export default {
  data() {
    return {
      alert: {
        success: '',
        error: '',
      },
      errors: {},
    };
  },
  methods: {
    clearAlerts() {
      this.alert.success = '';
      this.alert.error = '';
      this.errors = {};
    },
  },
};
