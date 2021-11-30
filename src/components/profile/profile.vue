<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <a href="#" class="menu__link" @click.prevent="emitHomeClick" aria-label="home link">
          <icon name="home" />
        </a>
      </li>
      <li class="menu__item profile" >
        <a href="#" class="menu__link" @click.prevent="emitProfileClick" aria-label="profile link">
          <img :src="profileImg" alt="profile-img" class="profile-img">
        </a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link" @click.prevent="emitLogoutClick" aria-label="logout link">
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
  props: {
    profileImg: String
  },
  emits: ['onFinish', 'homeClick', 'logoutClick', 'profileClick'],
  methods: {
    emitHomeClick () {
      this.$emit('homeClick')
    },
    emitLogoutClick () {
      this.$emit('logoutClick')
    },
    emitProfileClick () {
      this.$emit('profileClick')
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
