<template src="./template.html" />

<script>
import icon from '../../icons/icon'

export default {
  name: 'stories',
  props: {
    username: String,
    random: Function,
    numStories: Number
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
