<template src="./template.html" />

<script>
import framework from '../../components/framework/framework'
import issues from '../../components/issues/issues'

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
      num: -1
    }
  },
  methods: {
    forever (n) {
      this.num = this.random(n)
      return this.num
    }
  },
  components: {
    framework,
    issues
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>
