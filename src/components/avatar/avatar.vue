<template>
  <div class="avatar-component">
    <div :class="['image', {'bordered': active}]">
      <img
        v-bind="$attrs"
        class="img"
      >
    </div>
    <div class="username">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    active: Boolean
  }
}
</script>

<style scoped src="./style.scss" lang="scss"/>
