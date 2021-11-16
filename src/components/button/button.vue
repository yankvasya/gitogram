<template>
  <a href="#" class="button" @click.prevent>
    <span>{{defaultText}}</span>
    <span>{{hoverText}}</span>
  </a>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    defaultText: String,
    hoverText: String
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
