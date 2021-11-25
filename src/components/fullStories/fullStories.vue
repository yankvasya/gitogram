<template src="./template.html"/>

<script>
import progressLine from '../progress/progress'
import avatar from '../avatar/avatar'
import xButton from '../button/button'
import placeholder from '../../components/placeholder/placeholder'
import icon from '../../icons/icon'

export default {
  name: 'fullStories',
  props: {
    texts: String,
    titleStory: String,
    defaultText: String,
    hoverText: String,
    activeStory: Boolean,
    loadingSpinner: Boolean,
    avatarSrc: String
  },
  emits: ['onFinish'],
  components: {
    progressLine,
    avatar,
    xButton,
    placeholder,
    icon
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
