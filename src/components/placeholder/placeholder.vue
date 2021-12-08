<template>
  <ul class="placeholders" v-for="n of amount" :key="n">
    <li class="placeholder" v-for="i in (rows || 3)" :key="i"/>
  </ul>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    amount: Number,
    rows: Number
  }
}
</script>

<style lang="scss" src="./style.scss" scoped />
