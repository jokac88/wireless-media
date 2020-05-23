<template>
  <section class="promotions">
    <div v-for="item in promotions" :key="item.id" class="promotions-flex">
      <img
        :class="classes"
        class="icon icon-tv"
        :src="item.promotion_image"
        :alt="item.promotion_image"
      />
      <p v-html="item.promo_text" class="promo-text"></p>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    classes: Array,
    promotions: Array
  },
  computed: mapState(["data"])
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files
@import "@/scss/_colors.scss";
@import "@/scss/_mixins.scss";

// Style

.promotions {
  &-flex {
    @include d-flex-between;
    background-color: $white;
    height: 81px;
    margin-bottom: 31px;

    @include for-tablet-only {
      margin-bottom: 33px;
    }

    @include for-mobile-only {
      margin-bottom: 35px;
    }
  }

  .promo {
    &-text {
      margin-right: 25px;
      margin-left: 31px;
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