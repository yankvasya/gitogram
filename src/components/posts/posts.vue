<template src="./template.html" />

<script>
import framework from '../../components/framework/framework'
import issues from '../../components/issues/issues'
import icon from '../../icons/icon'

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
  data () {
    return {
      num: -1,
      isImgLoaded: false
    }
  },
  methods: {
    forever (n) {
      this.num = this.random(n)
      return this.num
    },
    imgLoaded () {
      this.isImgLoaded = true
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
