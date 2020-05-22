<template>
  <div class="item">
    <div class="wrapper">
      <div v-if="isFeatured > 0">
        <h5 class="promo-text">{{ promoText }}</h5>
        <hr />
      </div>
      <BaseHeading>{{ items.name }}</BaseHeading>
      <Television :data="data" :television="items.included" />
      <Net :data="data" :net="items.included" />
      <Promotions :promotions="items.promotions" />
      <Prices :prices="items.prices" />
      <BaseButton name="Naručiti" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TelevisionComponent from "./TelevisionComponent.vue";
import NetComponent from "./NetComponent.vue";
import PromotionsComponent from "./PromotionsComponent.vue";
import PricesComponent from "./PricesComponent.vue";

export default {
  props: {
    isFeatured: Number,
    promoText: String,
    items: Object
  },
  components: {
    Television: TelevisionComponent,
    Net: NetComponent,
    Promotions: PromotionsComponent,
    Prices: PricesComponent
  },
  computed: mapState(["data"])
};
</script>

<style scoped lang="scss">
@import "@/scss/_colors.scss";
@import "@/scss/_mixins.scss";

.item {
  max-width: 340px;
  height: 741px;
  margin: 0 20px 20px;
  background-color: $merino;
  border-radius: 10px;

  .wrapper {
    padding: 0 20px;
  }

  .promo {
    &-text {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>