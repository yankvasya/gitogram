<template src="./template.html" />

<script>
import issue from '../../components/issue/issue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'issues',
  props: {
    frameworkName: String,
    issue: String,
    num: Number
  },
  methods: {
    ...mapActions({
      fetchIssues: 'issues/fetchIssues'
    }),
    hideShow () {
      this.isShow = !this.isShow
      this.$emit('change', `${!this.isShow ? 'Hide' : 'Show'}`)
    },
    async returnData (item) {
      return item.data
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  components: {
    issue
  },
  computed: {
    ...mapState({
      repos: state => state.repositories,
      issues: state => state.issues
    })
  }
}
</script>

<style lang="scss" src="./style.scss" />
