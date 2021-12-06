<template src="./template.html" />

<script>
import framework from '../../components/framework/framework'
import issues from '../../components/issues/issues'
import icon from '../../icons/icon'

import { ref } from 'vue'
// import { useStore } from 'vuex'

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
    issueUsername: String,
    issue: String,
    month: String,
    numMonth: String || Number,
    onChange: Function
  },
  setup (props) {
    const isImgLoaded = ref(false)

    const imgLoaded = () => {
      isImgLoaded.value = !isImgLoaded.value
    }
    return {
      isImgLoaded,
      imgLoaded
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
