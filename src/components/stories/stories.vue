<template src="./template.html" />

<script>

export default {
  name: 'stories',
  props: {
    username: String,
    storiesImg: String,
    id: Number
  },
  methods: {
    goToStories () {
      this.$router.push({
        name: 'stories',
        params: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
