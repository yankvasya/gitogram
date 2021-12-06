<template src="./template.html" />

<script>
import issue from '../../components/issue/issue'
import placeholder from '../../components/placeholder/placeholder'
import icon from '../../icons/icon'
import toggler from '../toggler/toggler'

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'issues',
  props: {
    frameworkName: String,
    issue: String,
    num: Number,
    issueUsername: String
  },
  components: {
    issue,
    placeholder,
    icon,
    toggler
  },
  setup (props, { emit }) {
    const isShow = ref(false)
    const currentIssues = ref(false)
    const { dispatch, state, getters } = useStore()

    const getIssues = async () => {
      const data = { owner: props.issueUsername, repo: props.frameworkName }
      await dispatch('issues/fetchIssues', data)
    }

    const hideShow = async () => {
      if (state.issues?.loading) return
      isShow.value = !isShow.value
      emit('change', `${!isShow.value ? 'Hide' : 'Show'}`)
      currentIssues.value = true
      await getIssues()
      currentIssues.value = false
    }

    return {
      repos: computed(() => state.repositories),
      issues: computed(() => state.issues),
      checkStateByRepo: computed(() => getters['issues/checkStateByRepo']),
      isShow,
      currentIssues,
      getIssues,
      hideShow
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
