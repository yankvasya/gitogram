<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu />
      </template>
      <template #stories>
        <stories v-for="n in items" :username="n.owner?.login" :key="n" :stories-img="n.owner?.avatar_url"/>
      </template>
    </top>
  </header>

  <main>
    <posts-container>
      <template #post>
        <post
          v-for="n in items"
          :key="n"
          :username="n.owner?.login"
          :post-img="n.owner?.avatar_url"
          :framework-name="n.name"
          :framework-span="n.description?.split(' ')[0]"
          :framework-desc="n.description?.substring(n.description.indexOf(' ') + 1)"
          :stars="n.stargazers_count"
          :forks="n.forks"
          :issues-num="n.open_issues_count"
          :issue="issue"
          :month="months[n.created_at.slice(5,7) - 1]"
          :num-month="n.created_at.slice(8,10)"
        />
      </template>
    </posts-container>
    <pre v-for="n of items" :key="n">{{n}}</pre>
  </main>
</template>

<script>
import topMenu from '../../components/menu/menu'
import top from '../../components/header/header'
import stories from '../../components/stories/stories'
import post from '../../components/posts/posts'
import postsContainer from '../../components/postsContainer/postsContainer'

import * as api from '../../api'

export default {
  name: 'Home',
  components: {
    top,
    topMenu,
    stories,
    post,
    postsContainer
  },
  methods: {
    random (n) {
      return Math.floor(Math.random() * n)
    }
  },
  data () {
    return {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      items: [],
      issues: {}
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      const tempIssues = await api.trandings.getIssues()
      // const { url } = tempIssues.data
      this.items = data.items

      console.log(tempIssues.data)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
