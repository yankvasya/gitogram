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
        <div class="my-profile__head">
          <h3 class="my-profile__title">My profile</h3>
          <a class="my-profile__change" href="#" @click.prevent="this.isRepo = !this.isRepo">
            to {{this.isRepo ?'Following' : 'Repo'}} →
          </a>
        </div>
        <div class="my-profile" v-if="false">
          <placeholder :amount="1" />
        </div>
        <div class="my-profile__info" v-else>
          <div class="my-profile__avatar loading" v-if="!isProfileImgLoaded">
            <icon name="imgSpinner" />
          </div>
          <img
            class="my-profile__avatar"
            :src="user.data.avatar_url"
            :alt="user.data.name"
            @load="profileImgLoaded"
            v-show="isProfileImgLoaded"
          >
          <div class="my-profile__description">
            <h2 class="my-profile__username">{{user.data.login}}</h2>
            <ul class="my-profile__statistics">
              <li class="my-profile__reposts"><span class="number">{{user.data.followers}}</span> reposts</li>
              <li class="my-profile__watchers">
                <span class="number">{{user.data.followers}}</span>
                <a href="#" @click.prevent class="watchers">watchers</a>
              </li>
            </ul>
            <h4 class="my-profile__full-name">{{user.data.name}}</h4>
          </div>
        </div>
      </div>

      <div class="my-repositories" v-if="isRepo">
        <div class="my-repositories__top">
          <div class="my-repositories__title">Repositories</div>
          <div class="my-repositories__amount">{{user.data.public_repos}}</div>
        </div>
        <div class="my-repositories__loading" v-if="user.loading || repos.loading">
          <icon name="imgSpinner" />
        </div>

        <posts-container class="my-repositories__list" v-else>
          <template #post>
            <post
              v-for="n in user.data.repos?.data"
              :key="n.id"
              :framework-name="n.name"
              :framework-span="n.description?.split(' ')[0]"
              :framework-desc="n.description?.substring(n.description.indexOf(' ') + 1)"
              :stars="n.stargazers_count"
              :forks="n.forks"
            />
          </template>
        </posts-container>
      </div>

      <div class="followings" v-else>
        <div class="followings__top">
          <h3 class="followings__title">Following</h3>
          <h5 class="followings__amount">{{user.data.following}}</h5>
        </div>
        <div class="followings__loading" v-if="user.data.followings.loading">
          <icon name="imgSpinner" />
        </div>
        <div class="followings__loading" v-else-if="user.data.following.error">
          {{user.data.followings.error}}
        </div>

        <ul class="followings__list" v-else>
          <li class="following"
              v-for="f in user.data.followings.data"
              :key="f"
          >
            <div class="following__info">
              <div class="following__avatar loading" v-if="false">
                <icon name="imgSpinner" />
              </div>
              <img
                :src="f.avatar_url"
                :alt="`${f.login} ${f.type}`"
                class="following__avatar"
                v-else>
              <div class="following__description">
                <h4 class="following__username">{{f.login}}</h4>
                <h5 class="following__type">{{f.type}}</h5>
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
import post from '../../components/posts/posts'
import postsContainer from '../../components/postsContainer/postsContainer'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    top,
    topMenu,
    profileMenu,
    placeholder,
    icon,
    xButton,
    postsContainer,
    post
  },
  data () {
    return {
      isRepo: true,
      isProfileImgLoaded: false
    }
  },
  computed: {
    ...mapState({
      repos: state => state.repositories,
      user: state => state.user
    })
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
      fetchIssues: 'issues/fetchIssues',
      fetchUser: 'user/fetchUser',
      fetchUserRepos: 'user/fetchUserRepos',
      fetchUserFollowing: 'user/fetchUserFollowing'
    }),
    profileImgLoaded () {
      this.isProfileImgLoaded = true
    }
  },
  async created () {
    await this.fetchRepositories()
    await this.fetchUser()
    await this.fetchUserRepos()
    await this.fetchUserFollowing()
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>
