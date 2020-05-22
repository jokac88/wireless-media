<template>
  <div>
    <BaseDropdown
      :contracts="data.contract_length.contract_length_options"
      :isSelected="data.contract_length.preselected_contract_length"
    />
    <div class="items">
      <BaseItem
        v-for="item in data.items"
        :isFeatured="item.is_featured"
        :promoText="data.promo_text"
        :items="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: mapActions(["fetchData"]),
  computed: mapState(["data"]),
  mounted() {
    this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/scss/main.scss";

.items {
  @include d-flex-center;
}
</style>
