<template>
  <div class="all-stories">
    <header>
      <top>
        <template #topMenu>
          <div class="header__stories">
            <a href="#" @click.prevent>
              <icon name="logo" class="icon-logo"/>
            </a>

            <a href="#" @click.prevent>
              <icon name="close" class="icon-close" />
            </a>
          </div>
        </template>
      </top>
    </header>

    <stories-container
      texts="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque consequatur eligendi, expedita fuga in ipsum iure necessitatibus, nesciunt nostrum placeat quidem repellendus reprehenderit saepe sapiente temporibus unde, vel voluptatem."
      titleStory="Title story"
      hover-text="Unfollow"
      default-text="Follow"
      :active-story="false"
      :loading-spinner="false"
      avatar-src="https://cdn.pixabay.com/photo/2021/01/24/19/05/crane-5946169_960_720.jpg"
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
  props: {
    avatarSrc: String
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
