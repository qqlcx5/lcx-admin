<template>
  <div class="BasicLayout">
    <SiderMenu :isCollapse="isCollapse"></SiderMenu>
    <div class="contain">
      <header>
        <div @click="handleCollapse" class="collapseIcon">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </div>
      </header>

      <main>
        <router-view></router-view>
      </main>
      <footer>
        <p>Lcx-admin ©2019.7.1 Created by Lcx</p>
      </footer>
    </div>
  </div>
</template>

<script>
// import Foot from "./Footer";
import SiderMenu from "./SiderMenu";
// import SettingDrawer from "../components/SettingDrawer";
export default {
  name: "BasicLayout",
  components: {
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
@import "../assets/css/theme.scss";
.BasicLayout {
  // min-height: 100vh;
  height: 100vh;
  display: flex;
  .contain {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    header,
    footer {
      display: flex;
      align-items: center;
      height: 80px;
      width: 100%;
      background: $color-bgc;
      .collapseIcon {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        color: $color-side;
        &:hover {
          background: $color-active;
        }
      }
    }
  }
}
</style>
