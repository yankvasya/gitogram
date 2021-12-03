<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu >
          <template #rightMenu>
            <profile
              :profile-img="user.data?.avatar_url"
              :img-loading="user.loading"
              :profileAlt="user.data?.name"
            />
          </template>
        </topMenu>
      </template>
      <template #stories>
        <stories v-for="n in repos.data" :username="n.owner?.login" :key="n" :stories-img="n.owner?.avatar_url" :id="n.id"/>
<!--        <stories v-for="n in getUnstarredOnly" :username="n.owner?.login" :key="n" :stories-img="n.owner?.avatar_url" :id="n.id"/>-->
      </template>
    </top>
  </header>

  <main>
<!--    <pre>{{user}}</pre>-->
    <posts-container>
      <template #post>
        <div v-if="repos.loading && !repos.data">loading repositories...</div>
        <div v-else-if="repos.error">{{repos.error}}</div>
        <post
          v-for="n in repos.data"
          :key="n.id"
          :username="n.owner?.login"
          :post-img="n.owner?.avatar_url"
          :framework-name="n.name"
          :framework-span="n.description?.split(' ')[0]"
          :framework-desc="n.description?.substring(n.description.indexOf(' ') + 1)"
          :stars="n.stargazers_count"
          :forks="n.forks"
          :issues-num="n.open_issues_count"
          :month="months[n.created_at.slice(5,7) - 1]"
          :num-month="n.created_at.slice(8,10)"
        />
      </template>
    </posts-container>
  </main>
</template>

<script>
import topMenu from '../../components/menu/menu'
import top from '../../components/header/header'
import stories from '../../components/stories/stories'
import post from '../../components/posts/posts'
import postsContainer from '../../components/postsContainer/postsContainer'
import profile from '../../components/profile/profile'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    top,
    topMenu,
    profile,
    stories,
    post,
    postsContainer
  },
  data () {
    return {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
      fetchIssues: 'issues/fetchIssues',
      fetchUser: 'user/fetchUser',
      fetchUserRepos: 'user/fetchUserRepos'
    })
  },
  computed: {
    ...mapState({
      repos: state => state.repositories,
      user: state => state.user
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  async created () {
    await this.fetchRepositories()
    await this.fetchIssues(this.repos)
    await this.fetchUser()
    await this.fetchUserRepos()
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
