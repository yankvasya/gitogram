<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu />
      </template>
      <template #stories>
        <stories />
      </template>
    </top>
  </header>

  <main>
    <posts />
  </main>
</template>

<script>
import topMenu from '@/components/menu/menu'
import top from '@/components/header/header'
import stories from '@/components/stories/stories'
import posts from '@/components/posts/posts'

export default {
  name: 'Home',
  components: {
    top,
    topMenu,
    stories,
    posts
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
