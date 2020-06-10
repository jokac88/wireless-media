<template>
  <button class="btn btn-buy">{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: String
  }
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_colors.scss";
@import "@/scss/_transitions.scss";

// Style

.btn {
  &-buy {
    position: relative;
    height: 40px;
    border-radius: 10px;
    background-color: $plum;
    font-size: 18px;
    font-weight: 700;
    transition: $transition-3;
    overflow: hidden;
    margin-bottom: 30px;

    &:hover {
      &::after {
        left: 120%;
        transition: left 1.5s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }

    &::after {
      background: linear-gradient(to top right, transparent, #fff);
      content: "";
      height: 150px;
      left: -175px;
      opacity: 0.1;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      width: 100px;
    }
  }
}
</style>