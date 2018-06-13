<template>
  <div class="layout">
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <Menu-item name="1">
              <Icon type="ios-navigatve"></Icon>
              item 1
            </Menu-item>
            <Menu-item name="2">
              <Icon type="ios-keypad"></Icon>
              item 2
            </Menu-item>
            <Menu-item name="3">
              <Icon type="ios-analytics"></Icon>
              item 3
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-paper"></Icon>
              iutem 4
            </Menu-item>
          </div>
        </Menu>
      </Header>
      <div class="container">
        <slide-bar :menu-list="menuList" @on-change="handleChange"></slide-bar>
        <div class="single-page">
          <p>路由导航</p>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
  </div>
</template>

<script>
import slideBar from '@/components/slideBar/slideBar'
export default {
  name: 'topSidebar',
  methods: {
    init () {
      this.$store.commit('updateMenuList')
      console.log(this.$router)
    },
    handleChange (name) {
      console.log(name)
      this.$router.push({
        name: name
      })
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    menuList () {
      return this.$store.state.app.menuList
    }
  },
  components: {
    slideBar
  }
}
</script>

<style scoped>
  .layout{
    position: relative;
    overflow: hidden;
    border: 1px solid #d7dde4;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background: #f7f5f9;

  }
  .layout-logo{
    position: relative;
    top: 15px;
    left: 20px;
    float: left;
    width: 100px;
    height: 30px;
    border-radius: 3px;
    background: #5b6270;
  }
  .layout-nav{
    margin: 0 auto;
    margin-right: 20px;
    width: 420px;
  }
  .container{display: flex}
</style>
