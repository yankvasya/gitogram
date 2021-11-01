<template src="./template.html" />

<script>
import icon from '@/icons/icon'
import framework from '@/components/framework/framework'
import issues from '@/components/issues/issues'

export default {
  name: 'posts',
  props: {
    names: Array,
    random: Function,
    months: Array
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
    icon,
    framework,
    issues
  }
}
</script>

<style src="./style.scss" lang="scss" scoped/>
