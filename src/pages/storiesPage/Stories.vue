<template>
  <div class="all-stories">
    <header>
      <top>
        <template #topMenu>
          <div class="header__stories">
            <a href="#" @click.prevent="goToHome">
              <icon name="logo" class="icon-logo"/>
            </a>

            <a href="#" @click.prevent="goBack">
              <icon name="close" class="icon-close" />
            </a>
          </div>
        </template>
      </top>
    </header>

    <stories-container
    />
  </div>

</template>

<script>
import top from '../../components/header/header'
import icon from '../../icons/icon'
import storiesContainer from '../../components/storiesContainer/storiesContainer'

export default {
  name: 'storiesPage',
  components: {
    top,
    icon,
    storiesContainer
  },
  methods: {
    goToHome () {
      this.$router.push({
        name: 'home'
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
