<template src="./template.html"/>

<script>
import progress from '../progress/progress'
import avatar from '../avatar/avatar'
import button from '../button/button'

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
    progressLine: { progress },
    avatar,
    xButton: { button }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
