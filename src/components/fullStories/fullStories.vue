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
    boldText: String,
    texts: Array,
    titleStory: String,
    defaultText: String,
    hoverText: String,
    activeLine: Boolean,
    loadingSpinner: Boolean
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
