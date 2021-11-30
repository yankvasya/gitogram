<template src="./template.html" />

<script>
import icon from '../../icons/icon'

export default {
  name: 'framework',
  props: {
    title: String,
    span: String,
    desc: String,
    stars: Number,
    forks: Number
  },
  components: {
    icon
  }
}
</script>

<style src="./style.scss" lang="scss" />
