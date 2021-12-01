<template>
  <div v-if="disabled" class="button disabled">{{defaultText}}</div>
  <a v-else href="#" class="button" @click.prevent="loading || $emit('buttonClicked')" :class="{loading}">
    <div v-if="loading" class="button__loading">
      <icon name="imgSpinner" />
    </div>
    <div v-else>
      <span class="default-text">{{defaultText}}</span>
      <span class="hover-text">{{hoverText}}</span>
    </div>
    <slot />
  </a>
</template>

<script>
import icon from '../../icons/icon'

export default {
  name: 'xButton',
  props: {
    defaultText: String,
    hoverText: String,
    loading: Boolean,
    disabled: Boolean
  },
  emits: ['buttonClicked'],
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
