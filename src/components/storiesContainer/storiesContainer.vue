<template src="./template.html"/>

<script>
import fullStories from '../../components/fullStories/fullStories'
import icon from '../../icons/icon'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'storiesContainer',
  components: {
    fullStories,
    icon
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      slideCreated: false
    }
  },
  props: {
    texts: String,
    titleStory: String,
    defaultText: String,
    hoverText: String,
    loadingSpinner: Boolean,
    avatarSrc: String
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
      fetchIssues: 'issues/fetchIssues',
      fetchReadme: 'repositories/fetchReadme'
    }),
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = getComputedStyle(item).getPropertyValue('width') // 376 // getComputedStyle(item).getPropertyValue('width')
      this.slideNdx = slideNdx
      this.sliderPosition = parseInt(slideWidth) / 10 * parseInt(slideNdx)
      slider.style.transform = `translateX(-${this.sliderPosition}px)`
    },
    async loadReadme () {
      await this.fetchReadmeForActiveSlide()
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    },
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.repos.data[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    }
  },
  computed: {
    ...mapState({
      repos: state => state.repositories
    }),
    activeBtns () {
      return this.slideNdx === 0 ? ['next'] : (this.slideNdx === this.repos.data.length - 1) ? ['prev'] : ['next', 'prev']
    }
  },
  async created () {
    await this.fetchRepositories()
    await this.loadReadme()
    this.slideCreated = true
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
