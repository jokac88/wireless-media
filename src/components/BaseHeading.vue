<template>
  <section class="heading">
    <h1 class="heading-text">
      <slot></slot>
    </h1>
    <hr />
  </section>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_mixins.scss";

// Style

.heading {
  &-text {
    margin: 0 auto 22px;
    width: 210px;
    font-size: 48px;
    line-height: 47px;
    text-align: center;
    font-style: italic;

    @include for-tablet-only {
      margin-bottom: 30px;
    }

    @include for-mobile-only {
      margin-bottom: 24px;
    }
  }
}
</style>