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
    main {
      padding: 15px;
      box-sizing: border-box;
      // border: 15px solid $color-bgc;
    }

    header,
    footer {
      display: flex;
      align-items: center;
      height: 80px;
      width: 100%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
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
    footer {
      justify-content: center;
    }
  }
}
</style>
