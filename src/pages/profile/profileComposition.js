import { ref } from 'vue'

export default () => {
  const isRepo = ref(true)
  const isProfileImgLoaded = ref(false)

  const changeDirectory = () => {
    isRepo.value = !isRepo.value
  }

  const profileImgLoaded = () => {
    isProfileImgLoaded.value = true
  }

  return {
    isRepo,
    isProfileImgLoaded,
    changeDirectory,
    profileImgLoaded
  }
}
