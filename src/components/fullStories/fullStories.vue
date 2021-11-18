<template src="./template.html"/>

<script>
import progressLine from '../progress/progress'
import avatar from '../avatar/avatar'
import xButton from '../button/button'

export default {
  name: 'fullStories',
  props: {
    boldText: String,
    texts: Array,
    titleStory: String,
    defaultText: String,
    hoverText: String
  },
  emits: ['onFinish'],
  components: {
    progressLine,
    avatar,
    xButton
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
