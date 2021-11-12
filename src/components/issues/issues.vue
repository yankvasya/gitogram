<template src="./template.html" />

<script>
import issue from '../../components/issue/issue'
import * as api from '../../api'

export default {
  name: 'issues',
  props: {
    username: String,
    issue: String,
    num: Number
  },
  methods: {
    hideShow () {
      this.isShow = !this.isShow
      this.$emit('change', `${!this.isShow ? 'Hide' : 'Show'}`)
    },
    async returnData (item) {
      const info = item.data
      console.log(item.data)
      // const { data } = item
      return info
    }
  },
  data () {
    return {
      isShow: true,
      issues: []
    }
  },
  components: {
    issue
  },
  async created () {
    try {
      // eslint-disable-next-line camelcase
      const { data: { comments_url } } = await api.trandings.getIssues('/repos/bradtraversy/website-accessibility-tester/issues/1')
      this.issues = await this.returnData(await api.trandings.getIssues(comments_url))
      // const comments = await api.trandings.getIssues(data[0].url)

      console.log(this.issues)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
