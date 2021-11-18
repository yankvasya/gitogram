<template src="./template.html" />

<script>
import issue from '../../components/issue/issue'
import * as api from '../../api'

export default {
  name: 'issues',
  props: {
    frameworkName: String,
    issue: String,
    num: Number
  },
  methods: {
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
      isShow: true,
      items: [],
      issues: []
    }
  },
  components: {
    issue
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items

      for (const el of this.items) {
        const i = this.items.indexOf(el)
        this.issues[i] = (await api.trandings.getIssues(el.issues_url.split('{/number}').join(''))).data
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" />
