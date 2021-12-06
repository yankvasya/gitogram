<template src="./template.html" />

<script>
import issue from '../../components/issue/issue'
import placeholder from '../../components/placeholder/placeholder'
import icon from '../../icons/icon'
import toggler from '../toggler/toggler'

import { ref } from 'vue'

export default {
  name: 'issues',
  props: {
    frameworkName: String,
    num: Number,
    loading: Boolean,
    error: String,
    currentInfo: Object
  },
  components: {
    issue,
    placeholder,
    icon,
    toggler
  },
  emits: ['loadIssues'],
  setup (props, { emit }) {
    const isShow = ref(false)
    const currentIssues = ref(false)

    const hideShow = async () => {
      isShow.value = !isShow.value
      currentIssues.value = true
      await emit('loadIssues', `${!isShow.value ? 'Hide' : 'Show'}`)
      currentIssues.value = false
    }

    return {
      isShow,
      currentIssues,
      hideShow
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
