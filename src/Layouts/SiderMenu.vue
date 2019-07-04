<template>
  <div class="Asider">
    <el-menu
      class="el-menu-demo"
      default-active="1-1"
      :collapse="isCollapse"
      background-color="#1C2B36"
      text-color="#7BA0BB"
      active-text-color="#fff"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航3</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <span slot="title">选项4</span>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Asider",
  props: {
    isCollapse: Boolean
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
// .Asider {
//   height: 100vh;
//   overflow: hidden;
// }
.el-menu-demo {
  height: 100%;
  overflow-y: auto;
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    background: #eee;
  }
}
</style>
