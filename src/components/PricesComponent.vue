<template>
  <div class="prices">
    <div class="prices-flex">
      <p
        class="price price-old"
      >{{ prices.old_price_recurring['Ugovor 24 meseca'] | currencyFormatter }} rsd/mes.</p>
      <p
        class="price price-reccuring"
      >{{ prices.price_recurring['Ugovor 24 meseca'] | currencyFormatter }} rsd/mes.</p>
    </div>
    <div class="old-price-promo-text" v-html="prices.old_price_promo_text"></div>
  </div>
</template>

<script>
export default {
  props: {
    prices: Object
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_mixins.scss";
@import "@/scss/_colors.scss";

.prices {
  &-flex {
    @include d-flex-between;
  }

  .price {
    font-weight: 700;
    font-style: italic;

    &-old {
      font-size: 22px;
    }

    &-reccuring {
      font-size: 33px;
    }
  }

  .old {
    &-price {
      &-promo {
        &-text {
          font-size: 15px;
          color: $blue-zodiac;
          text-align: center;
        }
      }
    }
  }
}
</style>