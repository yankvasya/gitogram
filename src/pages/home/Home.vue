<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu />
      </template>
      <template #stories>
        <stories :names="names" :random="random"/>
      </template>
    </top>
  </header>

  <main>
    <posts :names="names" :random="random" :months="months"/>
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
  },
  methods: {
    random (n) {
      return Math.floor(Math.random() * n)
    }
  },
  data () {
    return {
      names: ['Josh', 'Andrew', 'Camille', 'Marcelle', 'Piter', 'Can', 'Iloveanime', 'Diself', 'Gartor', 'Camil'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
