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
    loadingSpinner: Boolean,
    activeStory: Boolean,
    avatarSrc: String,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator: v => v.every(e => e === 'next' || e === 'prev')
    },
    id: Number,
    buttonLoading: Boolean
  },
  emits: ['onFinish', 'onPrevSlide', 'onNextSlide', 'goFirstSlide', 'onFollow'],
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
