<template>
  <div class="auth">
    <div class="auth__content">
      <icon name="logo" />
      <p class="auth__text">More than just one repository.
        This is our digital world.</p>
      <x-button
        class="auth__button"
        default-text="Authorize with github"
        hover-text="Authorize with github"
      >
        <div class="auth__mark">
          <icon name="markGithub" />
        </div>
      </x-button>
    </div>
    <img src="../../assets/img/device.png" alt="social network look like">
  </div>
</template>

<script>
import icon from '../../icons/icon'
import xButton from '../../components/button/button'

export default {
  name: 'Auth',
  components: {
    icon,
    xButton
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
