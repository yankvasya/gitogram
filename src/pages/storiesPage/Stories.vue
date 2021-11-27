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
      default-text="Follow"
      hover-text="Unfollow"
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
  }
}
</script>

<style src="./style.scss" lang="scss" scoped />
