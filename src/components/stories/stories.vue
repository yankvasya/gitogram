<template src="./template.html" />

<script>
import icon from '@/icons/icon'

export default {
  name: 'stories',
  props: {
    names: Array,
    random: Function
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
