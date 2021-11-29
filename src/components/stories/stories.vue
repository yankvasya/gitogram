<template src="./template.html" />

<script>
import icon from '@/icons/icon'

export default {
  name: 'stories',
  data () {
    return {
      isImgLoaded: false
    }
  },
  props: {
    username: String,
    storiesImg: String,
    id: Number
  },
  methods: {
    goToStories () {
      this.$router.push({
        name: 'stories',
        params: {
          id: this.id
        }
      })
    },
    imgLoaded () {
      console.log('Говно загружено')
      this.isImgLoaded = true
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
