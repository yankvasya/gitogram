<template src="./template.html" />

<script>
import framework from '../../components/framework/framework'
import issues from '../../components/issues/issues'
import icon from '../../icons/icon'

import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'posts',
  props: {
    username: String,
    postImg: String,
    frameworkName: String,
    frameworkDesc: String,
    frameworkSpan: String,
    stars: Number,
    forks: Number,
    issuesNum: Number,
    month: String,
    numMonth: String || Number,
    onChange: Function
  },
  setup (props) {
    const isImgLoaded = ref(false)
    const { dispatch, state, getters } = useStore()

    const imgLoaded = () => {
      isImgLoaded.value = !isImgLoaded.value
    }

    const getIssues = async () => {
      if (state.issues?.loading) return
      const data = { owner: props.username, repo: props.frameworkName }
      await dispatch('issues/fetchIssues', data)
    }

    return {
      repos: computed(() => state.repositories),
      issues: computed(() => state.issues),
      checkStateByRepo: computed(() => getters['issues/checkStateByRepo']),
      isImgLoaded,
      imgLoaded,
      getIssues
    }
  },
  components: {
    framework,
    issues,
    icon
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>
