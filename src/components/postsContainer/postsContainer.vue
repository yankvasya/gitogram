<template>
<div class="container">
  <ul class="posts">
    <slot name="post" />
  </ul>
</div>

</template>

<script>
import posts from '../../components/posts/posts'

export default {
  name: 'postsContainer',
  components: posts
}
</script>

<style lang="scss" src="./style.scss" scoped/>
