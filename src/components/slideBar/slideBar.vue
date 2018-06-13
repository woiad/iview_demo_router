<template>
  <Sider :style="{background: '#fff'}" hide-trigger>
    <Menu theme="light" width="auto" :active-name="$route.name" @on-select="handleChange">
      <template v-for="item in menuList">
        <Menu-item v-if="item.children.length <= 1" :name="item.children[0].name" :key="'menuitem' + item.name">
          <Icon :type="item.children[0].icon || item.icon" :key="'menuicon' + item.name"></Icon>
          <span class="layout-text" :key="'title' + item.name">{{item.children[0].title}}</span>
        </Menu-item>
        <Submenu v-if="item.children.length > 1 " :name="item.children[0].name" :key="item.name">
          <template slot="title">
            <Icon :type="item.con"></Icon>
            <span class="layout-text">{{item.title}}</span>
          </template>
          <template v-for="child in item.children">
            <Menu-item :name="child.name" :key="'menuitem' + child.name">
              <Icon :type="child.icon" :key="'icon' + child.name"></Icon>
              <span class="layout-text" :key="'title' + child.name">{{child.title}}</span>
            </Menu-item>
          </template>
        </Submenu>
      </template>
    </Menu>
  </Sider>
</template>

<script>
export default {
  name: 'slideBar',
  props: {
    menuList: {
      type: Array,
      require: true
    }
  },
  methods: {
    handleChange (name) {
      this.$emit('on-change', name)
    }
  }
}
</script>

<style scoped>

</style>
