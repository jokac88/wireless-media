<template>
  <section class="item">
    <div class="wrapper">
      <!-- BaseHeading Component -->
      <BaseHeading :isFeatured="isFeatured" :promoText="promoText">{{ items.name }}</BaseHeading>
      <!-- Television Component -->
      <Television :data="data" :television="items.included" />
      <!-- Net Component -->
      <Net
        :data="data"
        :net="items.included"
        :active="data.contract_length.preselected_contract_length"
      />
      <!-- Promotions Component -->
      <transition name="slide" mode="out-in">
        <Promotions
          :promotions="items.promotions"
          v-if="data.contract_length.preselected_contract_length === 'Ugovor 24 meseca'"
        />
      </transition>
      <!-- Prices Component -->
      <Prices :prices="items.prices" />
      <!-- BaseButton Component -->
      <BaseButton name="Naručiti" />
    </div>
  </section>
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

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style scoped lang="scss">
// Import scss files

@import "@/scss/_colors.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/_transitions.scss";

// Style

.item {
  width: 340px;
  margin: 0 15px 23px;
  @include d-flex-center;
  position: relative;
  bottom: 0;
  background-color: $merino;
  border-radius: 10px;
  transition: $transition-5;
  cursor: pointer;

  &:hover {
    bottom: 10px;
    -webkit-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.75);
  }

  @include for-tablet-only {
    width: 360px;
    margin: 0 auto 30px;
  }

  @include for-mobile-only {
    width: 100%;
  }

  .wrapper {
    margin: 0 20px;
  }
}
</style>