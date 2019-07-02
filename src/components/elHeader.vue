<template>
  <div class="elHeader"></div>
</template>

<script>
export default {
  name: "elHeader",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/css/variables.scss";
.elHeader {
  height: 60px;
  line-height: 60px;
  width: 100%;
  display: flex;
  background: $color-this;
}
</style>
