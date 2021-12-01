<template>
<div class="container">
  <ul class="posts">
    <slot name="post" />
  </ul>
</div>
</template>

<script>

export default {
  name: 'postsContainer'
}
</script>

<style lang="scss" src="./style.scss" scoped/>
