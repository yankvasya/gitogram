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
        @onClick="getCode"
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
import env from '../../../env'

export default {
  name: 'Auth',
  components: {
    icon,
    xButton
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code: code,
            clientSecret: env.clientSecret
          })
        })

        const { token } = await response.json()

        localStorage.setItem('token', token)
        await this.$router.replace('/')
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
