<template>
  <div class="promotions">
    <div v-for="item in promotions" :key="item.id" class="promotions-flex">
      <img
        :class="classes"
        class="icon icon-tv"
        :src="item.promotion_image"
        :alt="item.promotion_image"
      />
      <p v-html="item.promo_text" class="promo-text"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: Array,
    promotions: Array
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_colors.scss";
@import "@/scss/_mixins.scss";

.promotions {
  &-flex {
    @include d-flex-between;
    background-color: $white;
    height: 81px;
  }

  .promo {
    &-text {
      margin-right: 25px;
      margin-left: auto;
      color: $plum;
      font-size: 14px;
      font-style: italic;
    }
  }

  .icon {
    &-tv {
      width: 81px;
      height: 95px;
    }
  }
}
</style>