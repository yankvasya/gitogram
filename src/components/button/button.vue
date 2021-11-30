<template>
  <a href="#" class="button" @click.prevent="$emit('onClick')">
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
  },
  emits: ['onClick']
}
</script>

<style lang="scss" src="./style.scss" scoped/>
