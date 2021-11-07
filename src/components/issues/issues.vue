<template src="./template.html" />

<script>
export default {
  name: 'issues',
  props: {
    username: String,
    issue: String,
    num: String
  },
  methods: {
    hideShow () {
      this.isShow = !this.isShow
      this.$emit('change', `${!this.isShow ? 'Hide' : 'Show'}`)
    }
  },
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
