<template>
  <header>
    <top>
      <template #topMenu>
        <topMenu />
      </template>
      <template #stories>
        <stories v-for="n in items" :username="n.owner?.login" :key="n" :stories-img="n.owner?.avatar_url"/>
      </template>
    </top>
  </header>

  <main>
   <div class="d-flex justify-center">
     <h1>{{foo}}</h1>
     <div v-for="n in isMiddlePlus(1)" :key="n">
       <pre>{{` ${n.name} ${n.status} |`}}</pre>
     </div>
     <button @click="testTrigger">CLICK ME</button>
   </div>
<!--    FETCH-->
    <div class="d-flex justify-center">
      <button @click="fetchData">FETCH DATA</button>
    </div>
    <div>{{isFemale}}</div>
    <div v-if="user.loading">loading...</div>
    <div v-else-if="user.error">{{user.error}}</div>
    <pre
      v-else-if="user.data">
      {{user.data}}
    </pre>
    <posts-container>
      <template #post>
        <post class="d-none"></post>
<!--        <post-->
<!--          v-for="n in items"-->
<!--          :key="n.id"-->
<!--          :username="n.owner?.login"-->
<!--          :post-img="n.owner?.avatar_url"-->
<!--          :framework-name="n.name"-->
<!--          :framework-span="n.description?.split(' ')[0]"-->
<!--          :framework-desc="n.description?.substring(n.description.indexOf(' ') + 1)"-->
<!--          :stars="n.stargazers_count"-->
<!--          :forks="n.forks"-->
<!--          :issues-num="n.open_issues_count"-->
<!--          :month="months[n.created_at.slice(5,7) - 1]"-->
<!--          :num-month="n.created_at.slice(8,10)"-->
<!--        >-->
<!--        </post>-->
      </template>
    </posts-container>
  </main>
</template>

<script>
import topMenu from '../../components/menu/menu'
import top from '../../components/header/header'
import stories from '../../components/stories/stories'
import post from '../../components/posts/posts'
import postsContainer from '../../components/postsContainer/postsContainer'

import * as api from '../../api'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    top,
    topMenu,
    stories,
    post,
    postsContainer
  },
  data () {
    return {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      items: [],
      issues: []
    }
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser'
    }),
    testTrigger () {
      this.$store.commit('user/UPDATE_FOO', 'foo')
      return this.$store.user?.getters.getMiddlePlus
    },
    fetchData () {
      this.fetchUser()
    }
  },
  computed: {
    ...mapState({
      // state.user.user, где 2е значение = модуль
      user: state => state.user.user,
      foo: state => state.user.foo
    }),
    // можно написать mapGetters('user', {}),
    // если все данные из одного модуля.
    // можно еще указывать массивы mapGetters('user',
    // [getIfUserIfFemale,getMiddlePlus])
    ...mapGetters({
      // где user/ <-- модуль
      isFemale: 'user/getIfUserIfFemale',
      isMiddlePlus: 'user/getMiddlePlus'
    })
  },
  async created () {
    console.log(this.$store.state.foo)
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

<style lang="scss" src="./style.scss" scoped/>
