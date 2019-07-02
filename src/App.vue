<template>
  <div id="app">
    <elHeader></elHeader>
    <section class="main">
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
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .main {
    display: flex;
    background-color: rgb(255, 0, 0);
    height: 100%;
    width: 100%;
    .contain {
      flex: 1;
      padding: 15px;
      box-sizing: border-box;
    }
  }
}
</style>
