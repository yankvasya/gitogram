<template src="./template.html"/>

<script>
import progressLine from '../progress/progress'
import avatar from '../avatar/avatar'
import xButton from '../button/button'
import placeholder from '../../components/placeholder/placeholder'

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
    xButton,
    placeholder
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
