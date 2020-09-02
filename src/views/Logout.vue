<template>
    <h1>Logout</h1>
</template>

<script>
export default {
    created() {
        console.log("Logout")
        this.$store.commit('updateUser', null)
        this.$router.push({ name: 'Home' })
  },
}
</script>