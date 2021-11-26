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
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
