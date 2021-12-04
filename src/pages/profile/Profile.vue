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
    </top>
  </header>

  <main class="main">
    <div class="container">
      <div class="my-profile">
        <h3 class="my-profile__title">My profile</h3>
        <div class="my-profile" v-if="false">
          <placeholder :amount="1" />
        </div>
        <div class="my-profile__info" v-else>
          <img class="my-profile__avatar" src="https://avatars.githubusercontent.com/u/10028428?v=4" alt="img">
          <div class="my-profile__description">
            <h2 class="my-profile__username">My username</h2>
            <ul class="my-profile__statistics">
              <li class="my-profile__reposts"><span class="number">54</span> reposts</li>
              <li class="my-profile__watchers"><span class="number">834</span> <a href="#" @click.prevent class="watchers">watchers</a></li>
            </ul>
            <h4 class="my-profile__full-name">Jacob West</h4>
          </div>
        </div>
      </div>

      <div class="followings">
        <div class="followings__top">
          <h3 class="followings__title">Following</h3>
          <h5 class="followings__amount">6</h5>
        </div>
        <div class="followings__loading" v-if="false">
          <icon name="imgSpinner" />
        </div>
        <ul class="followings__list" v-else>
          <li class="following" v-for="n in 15" :key="n">
            <div class="following__info">
              <img src="https://avatars.githubusercontent.com/u/10028428?v=4" alt="avatar" class="following__avatar">
              <div class="following__description">
                <h4 class="following__username">joshua_l</h4>
                <h5 class="following__type">user</h5>
              </div>
            </div>
            <x-button class="following__link" default-text="following" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import topMenu from '../../components/menu/menu'
import top from '../../components/header/header'
import profileMenu from '../../components/profile/profile'
import placeholder from '../../components/placeholder/placeholder'
import xButton from '../../components/button/button'
import icon from '../../icons/icon'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    top,
    topMenu,
    profileMenu,
    placeholder,
    icon,
    xButton
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
      fetchIssues: 'issues/fetchIssues',
      fetchUser: 'user/fetchUser',
      fetchUserRepos: 'user/fetchUserRepos'
    })
  },
  async created () {
    await this.fetchRepositories()
    await this.fetchUser()
    await this.fetchUserRepos()
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>
