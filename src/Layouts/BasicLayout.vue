<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from "./Header";
// import Footer from "./Footer";
// import SiderMenu from "./SiderMenu";
// import SettingDrawer from "../components/SettingDrawer";
export default {
  name: "BasicLayout",
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped></style>
