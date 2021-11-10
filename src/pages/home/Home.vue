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
    <posts
      :posts-count="items"
      :username="items[1].owner?.login"
      :framework-name="items[1].name"
      :framework-span="items[1].description?.split(' ')[0]"
      :framework-desc="items[1].description?.substring(items[1].description.indexOf(' ') + 1)"
      :post-img="items[0].owner?.avatar_url"
      :stars="items[0].stargazers_count"
      :forks="items[0].forks"
      :issues-num="items[0].open_issues_count"
      :issue="issue"
      :month="months[items[0].updated_at.slice(5,7) -1]"
      :num-month="items[0].updated_at.slice(0,2)"
    />
    <pre>{{items[1]}}</pre>
  </main>
</template>

<script>
import topMenu from '../../components/menu/menu'
import top from '../../components/header/header'
import stories from '../../components/stories/stories'
import posts from '../../components/posts/posts'

import * as api from '../../api'

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
