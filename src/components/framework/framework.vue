<template src="./template.html" />

<script>
export default {
  name: 'framework',
  props: {
    random: Function
  },
  data () {
    return {
      frameworks: ['Vue.js', 'React.js', 'Angular.js'],
      desc: ['<span>JavaScript</span> framework for building interactive web applications ⚡',
        '<span>Open</span> source JavaScript library used for designing user interfaces',
        '<span>The task</span> missing APIs fot Github trending projects and developers ⚡']
    }
  }
}
</script>

<style src="./style.scss" lang="scss" />
