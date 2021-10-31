<template src="./template.html" />

<script>
export default {
  name: 'issues',
  methods: {
    hideShow () {
      this.isShow = !this.isShow
    },
    random (n) {
      return Math.floor(Math.random() * n)
    }
  },
  data () {
    return {
      isShow: true,
      names: ['Josh', 'Andrew', 'Camille', 'Marcelle', 'Piter', 'Can', 'Iloveanime', 'Diself', 'Gartor', 'Camil'],
      issue: ['Enable performance measuring in production, at the user\'s request',
        'It\'s Impossible to Rename an Inherited Slot',
        'transition-group with flex parent causes removed items to fly'
      ]
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
