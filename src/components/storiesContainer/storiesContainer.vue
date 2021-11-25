<template src="./template.html"/>

<script>
import placeholder from '../../components/placeholder/placeholder'

export default {
  name: 'storiesContainer',
  components: {
    placeholder
  },
  props: {
    amountPlaceholders: Number
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
