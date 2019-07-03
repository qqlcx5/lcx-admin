<template>
  <div id="app">
    <router-view />
    <!-- <elHeader></elHeader>
    <section class="main scrollbar">
      <elAside></elAside>
      <article class="contain">
        
      </article>
    </section> -->
  </div>
</template>
//
<script>
// import elHeader from "./components/elHeader";
// import elAside from "./components/elAside";
// export default {
//   components: {
//     elHeader,
//     elAside
//   }
// };
//
</script>

<style lang="scss">
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 6px;
  background: #c1c1c1;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  visibility: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .main {
    display: flex;
    flex: 1;
    overflow: hidden;
    // background-color: rgb(255, 0, 0);
    .contain {
      flex: 1;
      padding: 15px;
      box-sizing: border-box;
      overflow-y: auto;
    }
  }
}
</style>
