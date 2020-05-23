<template>
  <section class="prices">
    <hr />
    <div
      :class="{ 'prices-flex' : data.contract_length.preselected_contract_length === 'Ugovor 24 meseca'}"
    >
      <p
        v-if="data.contract_length.preselected_contract_length === 'Ugovor 24 meseca'"
        class="price price-old"
      >{{ prices.old_price_recurring[data.contract_length.preselected_contract_length] | currencyFormatter }} rsd/mes.</p>
      <p
        :class="{ active : data.contract_length.preselected_contract_length !== 'Ugovor 24 meseca' }"
        class="price price-reccuring"
      >{{ prices.price_recurring[data.contract_length.preselected_contract_length] | currencyFormatter }} rsd/mes.</p>
    </div>
    <transition name="fade" mode="out-in">
      <div
        v-if="data.contract_length.preselected_contract_length === 'Ugovor 24 meseca'"
        v-html="prices.old_price_promo_text"
        class="old-price-promo-text"
      ></div>
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    prices: Object
  },
  computed: mapState(["data"])
};
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_colors.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/_transitions.scss";

// Style

.prices {
  &-flex {
    @include d-flex-between-end;
    margin: 22px 0 20px;

    @include for-tablet-only {
      margin: 19px 0;
    }

    @include for-mobile-only {
      @include d-flex-direction-column;
      margin: 20px 0 12px;
    }
  }

  .price {
    font-weight: 700;
    font-style: italic;

    &-old {
      font-size: 22px;
      height: 22px;
      text-decoration: line-through;
      text-decoration-color: $woodsmoke;

      @include for-mobile-only {
        order: 1;
      }
    }

    &-reccuring {
      font-size: 33px;
      height: 33px;
      text-align: center;
      transition: $transition-3;

      @include for-mobile-only {
        margin-bottom: 13px;
      }

      &.active {
        margin: 23px 0 26px;
        font-size: 36px;

        @include for-tablet-only {
          margin: 29px 0;
          height: auto;
        }

        @include for-mobile-only {
          margin: 19px 0 24px;
        }
      }
    }
  }

  .old {
    &-price {
      &-promo {
        &-text {
          margin-bottom: 33px;
          font-size: 15px;
          color: $blue-zodiac;
          text-align: center;

          @include for-mobile-only {
            margin-bottom: 28px;
          }
        }
      }
    }
  }
}
</style>