<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu />
      </template>
      <template #stories>
        <stories username="friend" :num-stories="10"/>
      </template>
    </top>
  </header>

  <main>
    <post
      :posts-count="items"
      :username="items[0].owner.login"
      :framework-name="items[0].name"
      :framework-span="items[0].description.split(' ')[0]"
      :framework-desc="items[0].description.substring(items[0].description.indexOf(' ') + 1)"
      :post-img="items[0].owner.avatar_url"
      :stars="items[0].stargazers_count"
      :forks="items[0].forks"
      :issues-num="issuesNum"
      :issue="issue"
      month="Jan"
      :num-month="1"
    />
    <pre>{{items[0]}}</pre>
  </main>
</template>

<script>
import topMenu from '../../components/menu/menu'
import top from '../../components/header/header'
import stories from '../../components/stories/stories'
import post from '../../components/posts/posts'

import * as api from '../../api'

export default {
  name: 'Home',
  components: {
    top,
    topMenu,
    stories,
    post
  },
  methods: {
    random (n) {
      return Math.floor(Math.random() * n)
    }
  },
  data () {
    return {
      names: ['Josh', 'Andrew', 'Camille', 'Marcelle', 'Piter', 'Can', 'Iloveanime', 'Diself', 'Gartor', 'Camil'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()

      this.items = data.items
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
