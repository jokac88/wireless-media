<template>
  <section class="loader">
    <div class="frame">
      <img class="rotating" src="../../public/new-loader.png" alt="../../public/new-loader.png" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_colors.scss";
@import "@/scss/_mixins.scss";

// Style

.loader {
  @include d-flex-center;
  background-color: $tundora;
  height: 100vh;

  .frame {
    width: 240px;
    height: 240px;
    @include d-flex-center;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
    }
  }
}
</style>