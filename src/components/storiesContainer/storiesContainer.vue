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
  props: {
    texts: String,
    // titleStory: String,
    defaultText: String,
    hoverText: String,
    activeStory: Boolean,
    loadingSpinner: Boolean,
    avatarSrc: String
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
      fetchIssues: 'issues/fetchIssues'
    })
  },
  computed: {
    ...mapState({
      repos: state => state.repositories
    })
  },
  async created () {
    await this.fetchRepositories()
    await this.fetchIssues(this.repos)
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
