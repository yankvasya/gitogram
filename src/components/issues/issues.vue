<template src="./template.html" />

<script>
import issue from '../../components/issue/issue'
import { mapActions, mapGetters, mapState } from 'vuex'
import placeholder from '../../components/placeholder/placeholder'
import icon from '../../icons/icon'
import toggler from '../toggler/toggler'

export default {
  name: 'issues',
  props: {
    frameworkName: String,
    issue: String,
    num: Number,
    issueUsername: String
  },
  methods: {
    ...mapActions({
      fetchIssues: 'issues/fetchIssues'
    }),
    async hideShow () {
      if (this.issues?.loading) return
      this.isShow = !this.isShow
      this.$emit('change', `${!this.isShow ? 'Hide' : 'Show'}`)
      this.currentIssues = true
      await this.getIssues()
      this.currentIssues = false
    },
    async returnData (item) {
      return item.data
    },
    async takeIssues (name) {
      const data = this.checkStateByRepo(name)
      console.log(data)
      return data
    },
    async getIssues () {
      const data = { owner: this.issueUsername, repo: this.frameworkName }
      await this.fetchIssues(data)
    }
  },
  data () {
    return {
      isShow: false,
      currentIssues: false
    }
  },
  components: {
    issue,
    placeholder,
    icon,
    toggler
  },
  computed: {
    ...mapState({
      repos: state => state.repositories,
      issues: state => state.issues
    }),
    ...mapGetters({
      checkStateByRepo: 'issues/checkStateByRepo'
    })
  }
}
</script>

<style lang="scss" src="./style.scss" />
