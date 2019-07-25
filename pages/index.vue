<template>
  <div>
    🔐 {{ authToken }}
  </div>
</template>

<script>

export default {
  computed: {
    authToken () {
      return this.$store.state.authToken;
    }
  }
}
</script>
