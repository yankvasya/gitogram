<template>
  <div :class="(active || activeLine) ? 'active' : ''" class="progress">
    <div ref="indicator" class="progress__line"></div>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  props: {
    activeLine: Boolean
  },
  mounted () {
    this.$nextTick(() => {
      this.active = this.activeLine
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
