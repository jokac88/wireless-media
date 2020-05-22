<template>
  <div class="heading">
    <h1 class="heading-text">
      <slot></slot>
    </h1>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.heading {
  &-text {
    margin: 0 auto;
    width: 194px;
    font-size: 47px;
    line-height: 47px;
    text-align: center;
    font-style: italic;
  }
}
</style>