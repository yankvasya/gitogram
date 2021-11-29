<template src="./template.html" />

<script>

export default {
  name: 'stories',
  props: {
    username: String,
    storiesImg: String
  },
  methods: {
    goToStories () {
      this.$router.push('/stories')
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
