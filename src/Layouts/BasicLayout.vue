<template>
  <div>
    <el-container>
      <!-- <el-aside width="200">
        <el-menu class="el-menu-demo" :collapse="isCollapse"> </el-menu>
      </el-aside> -->
      <SiderMenu :isCollapse="isCollapse"></SiderMenu>
      <el-container>
        <el-header>
          <div @click="handleCollapse" class="collapseIcon">
            <i class="el-icon-s-fold"></i>
          </div>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
// import SettingDrawer from "../components/SettingDrawer";
export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SiderMenu
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
}
.collapseIcon {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
