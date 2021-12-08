<template>
  <a href="#" :class="['toggler', {'show': isShow}]" @click.prevent="hideShow">
    <div class="toggler__title">{{isShow ? 'Hide' : 'Show'}} issues</div>
    <div class="toggler__arrow">
      <icon name="toggler" />
    </div>
  </a>
</template>

<script>
import icon from '../../icons/icon'

export default {
  name: 'toggler',
  components: {
    icon
  },
  data () {
    return {
      isShow: false
    }
  },
  props: {
    doNotChange: Boolean
  },
  methods: {
    hideShow () {
      if (this.doNotChange) return
      this.isShow = !this.isShow
      this.$emit('toggle', this.isShow)
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
