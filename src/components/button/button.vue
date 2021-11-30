<template>
  <a href="#" class="button" @click.prevent>
    <span class="default-text">{{defaultText}}</span>
    <span class="hover-text">{{hoverText}}</span>
    <slot />
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
