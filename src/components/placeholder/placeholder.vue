<template>
  <ul class="placeholders" v-for="n of amount" :key="n">
    <li class="placeholder" />
    <li class="placeholder" />
    <li class="placeholder" />
  </ul>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    amount: Number
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
