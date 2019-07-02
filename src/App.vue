<template>
  <div id="app">
    <elHeader></elHeader>
    <section class="main scrollbar">
      <elAside></elAside>
      <article class="contain">
        <router-view />
      </article>
    </section>
  </div>
</template>
<script>
import elHeader from "./components/elHeader";
import elAside from "./components/elAside";
export default {
  components: {
    elHeader,
    elAside
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
  // background-color: #f1f1f1;
}
/*定义滚动条的轨道，内阴影及圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0 #f1f1f1;
  border-radius: 0;
  visibility: hidden;
  background-color: #f1f1f1;
}

/*定义滑块，内阴影及圆角*/
::-webkit-scrollbar-thumb {
  /*width: 10px;*/
  /*height: 25px;*/
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 0 #c1c1c1;
  background-color: rgba(193, 193, 193, 0.7);
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
