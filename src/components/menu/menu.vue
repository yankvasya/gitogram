<template src="./template.html" />

<script>

import icon from '../../icons/icon'

export default {
  name: 'top-menu',
  components: {
    icon
  },
  methods: {
    logoClick () {
      this.$emit('change', 'logo click')
    },
    homeClick () {
      this.$emit('change', 'home')
    },
    logoutClick () {
      this.$emit('change', 'logout')
    },
    profileClick () {
      this.$emit('change', 'profile')
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
