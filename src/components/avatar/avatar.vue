<template>
  <div class="avatar-component">
    <h1>Text</h1>
    <div :class="['image', {'bordered': active}]">
      <img
        v-bind="$attrs"
        class="img"
      >
    </div>
    <div class="avatar-component__username">{{title}}</div>
    <a href="#" class="avatar-component__button" @click.prevent="$emit('change', 'messages')">Сообщения</a>
    <a href="#" class="avatar-component__button" @click.prevent="$emit('change', 'logout')">Выйти</a>
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
