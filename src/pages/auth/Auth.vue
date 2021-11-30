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

const clientID = 'be26530e754b96676558'
const clientSecret = '3258a8de3a39fd8e8af1c141b10586ccd81c6317'

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

      params.append('client_id', clientID)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    console.log(clientID, 'clientID')
    console.log(clientSecret, 'clientSecret')
    console.log(code, 'code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientID, code, clientSecret
          })
        })

        const { token } = await response.json()

        console.log(token, ' this is token')
        // this.$router.replace("/");
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
