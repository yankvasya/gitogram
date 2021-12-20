<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu >
          <template #rightMenu>
            <profile-menu
              :profile-img="user.data?.avatar_url"
              :img-loading="user.loading"
              :profileAlt="user.data?.name"
            />
          </template>
        </topMenu>
      </template>
      <template #stories>
        <div class="x-container">
          <ul class="stories">
            <stories v-for="n in getUnstarredOnly" :username="n.owner?.login" :key="n" :stories-img="n.owner?.avatar_url" :id="n.id"/>
          </ul>
        </div>
      </template>
    </top>
  </header>

  <main>
    <posts-container class="container posts-container">
      <template #post>
        <div v-if="user.data.starred?.loading">loading repositories...</div>
        <div v-else-if="user.data.starred?.error">{{repos.error}}</div>
        <post
          v-for="n in user.data.starred?.data"
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
import profileMenu from '../../components/profile/profile'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    top,
    topMenu,
    profileMenu,
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
      fetchUserRepos: 'user/fetchUserRepos',
      fetchUserStarredRepos: 'user/fetchUserStarredRepos'
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
    !this.user.data?.length && await this.fetchUser()
    !this.user.data.starred?.data?.length && await this.fetchUserStarredRepos()
    !this.repos.data?.length && await this.fetchRepositories()
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
