<template>
    <h1>Logout</h1>
</template>

<script>
export default {
    created() {
        console.log("Logout")
        this.$store.commit('clearState')
        this.$router.push({ name: 'Blog' })
  },
}
</script>