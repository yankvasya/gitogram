<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <a href="#" class="menu__link" @click.prevent="goHome" aria-label="home link">
          <icon name="home" />
        </a>
      </li>
      <li class="menu__item profile" >
        <div v-show="!isImgLoaded" class="profile__loading">
          <icon name="imgSpinner" />
        </div>
        <a v-show="isImgLoaded" href="#" class="menu__link" @click.prevent="goProfile" aria-label="profile link">
          <img :src="profileImg" :alt="profileAlt" class="profile__img" @load="profileImgLoaded">
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link" @click.prevent="profileLogout" aria-label="logout link">
          <icon name="logout" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import icon from '../../icons/icon'

export default {
  name: 'profile',
  components: {
    icon
  },
  data () {
    return {
      isImgLoaded: false
    }
  },
  props: {
    profileImg: String,
    imgLoading: Boolean,
    profileAlt: String
  },
  emits: ['onFinish', 'homeClick'],
  methods: {
    profileImgLoaded () {
      this.isImgLoaded = true
    },
    profileLogout () {
      localStorage.removeItem('token')
      window.location.reload()
    },
    goProfile () {
      this.$router.push({
        name: 'profile'
      })
    },
    goHome () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
