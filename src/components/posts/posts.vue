<template src="./template.html" />

<script>
import icon from '@/icons/icon'
import framework from '@/components/framework/framework'
import issues from '@/components/issues/issues'

export default {
  name: 'posts',
  data () {
    return {
      names: ['Josh', 'Andrew', 'Camille', 'Marcelle', 'Piter', 'Can', 'Iloveanime', 'Diself', 'Gartor', 'Camil'],
      num: 0,
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  methods: {
    random (n) {
      return Math.floor(Math.random() * n)
    },
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
