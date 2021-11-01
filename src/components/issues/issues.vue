<template src="./template.html" />

<script>
export default {
  name: 'issues',
  props: {
    names: Array,
    random: Function
  },
  methods: {
    hideShow () {
      this.isShow = !this.isShow
    }
  },
  data () {
    return {
      isShow: false,
      issue: ['Enable performance measuring in production, at the user\'s request',
        'It\'s Impossible to Rename an Inherited Slot',
        'transition-group with flex parent causes removed items to fly'
      ]
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
