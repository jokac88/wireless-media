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

<style scoped lang="scss">
@import "@/scss/_colors.scss";

.btn {
  &-buy {
    padding: 13px 0;
    border-radius: 10px;
    background-color: $plum;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>