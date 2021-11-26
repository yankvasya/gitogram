<template src="./template.html"/>

<script>
import fullStories from '../../components/fullStories/fullStories'
import top from '../../components/header/header'
import icon from '../../icons/icon'

export default {
  name: 'storiesContainer',
  components: {
    fullStories,
    top,
    icon
  },
  props: {
    texts: String,
    titleStory: String,
    defaultText: String,
    hoverText: String,
    activeStory: Boolean,
    loadingSpinner: Boolean,
    avatarSrc: String
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
