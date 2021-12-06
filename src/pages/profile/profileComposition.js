import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const isRepo = ref(true)
  const isProfileImgLoaded = ref(false)
  const { dispatch, state } = useStore()

  onMounted(async () => {
    await dispatch('user/fetchUser')
    await dispatch('user/fetchUserStarredRepos')
    await dispatch('user/fetchUserFollowing')
  })

  const changeDirectory = () => {
    isRepo.value = !isRepo.value
  }

  const profileImgLoaded = () => {
    isProfileImgLoaded.value = true
  }

  return {
    repos: computed(() => state.repositories),
    user: computed(() => state.user),
    isRepo,
    isProfileImgLoaded,
    changeDirectory,
    profileImgLoaded
  }
}
