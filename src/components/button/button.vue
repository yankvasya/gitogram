<template>
  <a href="#" class="button" @click.prevent :class="{loading, disabled}">
    <div v-if="loading" class="button__loading">
      <icon name="imgSpinner" />
    </div>
    <div v-else>
      <span class="default-text">{{defaultText}}</span>
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
    loading: Boolean,
    disabled: Boolean
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
